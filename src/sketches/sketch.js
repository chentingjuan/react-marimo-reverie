
// import { vert, frag } from './tab2';

export default function sketch(p5) {
  const { windowWidth, windowHeight } = p5;
  let colors = "a2ca3d-81bc3f-5fad41-3e954b-2d8950-1c7c54-48af7e".split("-").map(a=>"#"+a);
  let marimos = [], numOfMarimos = 10, nutritions = [], numOfNutritions = 5;
  let user;
  let bubbles = [], sounds = [];
  const chewingTime = 300, eateningTime = 20;
  const userColor = '#219EBC';
  // const nutritionColor = '#6B705C';
  const nutritionColor = '#fff';
  let props;
  let pixelWidth = 6;
  // let timer = 0;

  p5.myCustomRedrawAccordingToNewPropsHandler = (theProps) => {
    props = theProps;
    // if (props.rotation) {
    //   rotation = (props.rotation * Math.PI) / 180;
    // }
  };

  p5.setup = () => {
    p5.createCanvas(windowWidth, windowHeight);
    p5.noStroke();
    numOfMarimos = Math.floor(windowWidth*windowHeight/90000);
    numOfNutritions = Math.floor(windowWidth*windowHeight/90000);

    setInterval(() => props.setTimer(props.timer+1), 1000);
    
    marimos=[];
    for(let i=0; i<numOfMarimos; i++){
      marimos.push(new Marimo({
        position: getRandomPosition(),
        vector: p5.constructor.Vector.random2D(),
        diameter: p5.int(p5.random(10, 24)) * pixelWidth,
        color: colors[Math.floor(p5.random(colors.length))],
      }));
    }
    
    nutritions=[];
    for(let i=0; i<numOfNutritions; i++){
      nutritions.push(new Nutrition({
        position: getRandomPosition(),
      }))
    }
    
    user = new User();
  }

  p5.draw = () => {
    if(user.eateningTimer%10 < 5) p5.background('#DEF0F7');
    else p5.background('black');
    // p5.background('black');

    if (p5.frameCount % 50 === 0) {
      let position = getRandomPosition();
      nutritions.push(new Nutrition({
        position
      }))
    }
    
    // marimos...
    marimos.forEach(m => {
      m.update()
      m.draw()
      if(m.chewing) m.chewingTimer--;
      if(m.chewingTimer<=0) {
        m.chewing=false;
        m.chewingTimer = chewingTime;
      }
      
      // hit the nutritions
      nutritions.filter(n => !n.eaten).forEach(n => {
        if(m.position.dist(n.position)<(m.diameter+n.diameter)/2) {
          // m.diameter+=pixelWidth;
          m.toSize(m.diameter + pixelWidth);
          n.eaten=true;
        }
      })
      
      // hit user
      if(user.diameter>pixelWidth*1) {
        if(!m.chewing && m.position.dist(user.position)<(m.diameter+user.diameter)/2) {
          // m.diameter+=pixelWidth;
          m.toSize(m.diameter + pixelWidth);
          m.chewing = true;
          user.eatening = true;
          // user.diameter-=pixelWidth;
          user.toSize(user.diameter - pixelWidth);
        }
      } else {
        props.isGameOver();
        // console.log("Game over!")
        // alert("Game Over!");
        // setup();
      }
      
      // divide
      if(m.diameter>pixelWidth*28) {
        // sounds[0].play();
        // m.diameter=pixelWidth*15;
        m.toSize(pixelWidth*15);
        // m.position.sub(10, 0);
        marimos.push(new Marimo({
          position: m.position.copy().add(20, 0),
          vector: p5.createVector(0, 0),
          diameter: pixelWidth*15,
          color: m.color,
        }));
      }
      
      // add bubbles
      // if (p5.random()<0.02){
      //   let offset = p5.random(-m.radius, m.radius);
      //   bubbles.push({
      //     p: m.position.copy().add(offset),
      //     v: p5.createVector(0, p5.random(-0.5,-5)),
      //     r: p5.random(1,6),
      //     opacity: p5.random(0.1, 500)
      //   })
      // }
    })
    
    // nutritions...
    nutritions.filter(n => !n.eaten).forEach(n => {
      n.draw()
      
      // hit user
      if(user.position.dist(n.position)<(user.diameter+n.diameter)/2) {
        user.toSize(user.diameter + pixelWidth);
        n.eaten=true;
      }
    });
    
    // bubbles...
    // bubbles.forEach(b=>{
    //   drawPixelCircle(p5.color(255), p5.createVector(b.p.x + p5.noise(b.p.y/20)*b.r*2, b.p.y, 100), b.r);
    //     b.p.y+=b.v.y;
    // })
    // bubbles = bubbles.filter(b=>b.p.y>-windowHeight/2)
    
    user.update();
    user.draw();
    if(user.eatening) user.eateningTimer--;
    if(user.eateningTimer<=0) {
      user.eatening=false;
      user.eateningTimer = eateningTime;
    }

    props.setNumOfMarimos(marimos.length)
  }

  class Marimo {
    constructor(params) {
      this.position = params.position;
      this.vector = params.vector;
      this.diameter = params.diameter;
      this.color = params.color;
      this.chewing = false;
      this.chewingTimer = chewingTime;
      this.dividing = false;
      // this.colliding=false;

      this.matrix = generateMatrix(this.color, this.diameter);
    }
    draw() {
      drawPixelCircle(this.matrix, this.position);
    }
    update() {
      this.position.add(this.vector)
      if(p5.frameCount%900===0) this.vector.mult(0.9)
      
      // hit the wall
      if(this.position.x <= 0 || this.position.x > windowWidth) this.vector.x = -1.3*this.vector.x;
      if(this.position.y <= 0 || this.position.y > windowHeight) this.vector.y = -1.3*this.vector.y;
      
      // hit the marimos
      marimos.forEach(m => {
        if (this!==m){
          if (this.position.dist(m.position)<(this.diameter+m.diameter)/2) {
            //add sounds
            // 
          }

          if (this.position.dist(m.position)<(this.diameter+m.diameter)/2.1) {
            let delta = m.position.copy().sub(this.position)
            this.vector.sub(delta.mult(0.2).setMag(1))
            m.vector.add(delta.mult(0.2).setMag(1))
          }
        }
      })
      
      const maxVector = 2.4;
      if(this.vector.x > maxVector) this.vector.x = maxVector;
      if(this.vector.x < -1*maxVector) this.vector.x = -1*maxVector;
      if(this.vector.y > maxVector) this.vector.y = maxVector;
      if(this.vector.y < -1*maxVector) this.vector.y = -1*maxVector;
    }
    toSize(diameter) {
      this.diameter=diameter;
      this.matrix = generateMatrix(this.color, this.diameter);
    }
  }

  class Nutrition {
    constructor(params) {
      this.position = params.position;
      this.diameter = 4;
      this.color = nutritionColor;
      this.eaten=false;

      this.matrix = generateMatrix(this.color, this.diameter);
    }
    draw() {
      drawPixelCircle(this.matrix, this.position);
      // drawPixelCircle(nutritionColor, this.position, this.diameter);
    }
  }

  class User {
    constructor(params) {
      this.position = p5.createVector(0, 0);
      this.diameter = pixelWidth*3;
      // this.eatenable = true;
      this.color = userColor;
      this.eatening = false;
      this.eateningTimer = eateningTime;
      
      this.matrix = generateMatrix(this.color, this.diameter);
    }
    draw() {
      // drawPixelCircle(userColor, this.position, this.diameter);
      drawPixelCircle(this.matrix, this.position);
    }
    update() {
      const easing = 0.01;
      
      let targetX = p5.mouseX;
      let dx = targetX - this.position.x;
      this.position.x += dx * easing;

      let targetY = p5.mouseY;
      let dy = targetY - this.position.y;
      this.position.y += dy * easing;
    }
    toSize(diameter) {
      this.diameter=diameter;
      this.matrix = generateMatrix(this.color, this.diameter);
    }
  }

  const getRandomPosition = () => p5.createVector(p5.random(0, windowWidth), p5.random(0, windowHeight));

  const distance = ( x, y ) => Math.sqrt((Math.pow(y, 2)) + Math.pow(x, 2));
  const filled = ( x, y, radius ) => distance(x, y) <= radius;
	const	fatfilled = ( x, y, radius ) => {
    return filled(x, y, radius) && !(
      filled(x + 1, y, radius) &&
      filled(x - 1, y, radius) &&
      filled(x, y + 1, radius) &&
      filled(x, y - 1, radius) &&
      filled(x + 1, y + 1, radius) &&
      filled(x + 1, y - 1, radius) &&
      filled(x - 1, y - 1, radius) &&
      filled(x - 1, y + 1, radius)
    );
  };

  const generateMatrix = (color, diameter) => {
    const radius = Math.ceil(diameter/pixelWidth)/2;
    const borderColor = p5.lerpColor(p5.color('black'), p5.color(color), 0.6);
    const color_1 = p5.lerpColor(p5.color('black'), p5.color(color), 0.66);
    const color_2 = p5.lerpColor(p5.color('black'), p5.color(color), 0.9);
    const color_3 = color;
    const color_4 = p5.lerpColor(p5.color('white'), p5.color(color), 0.9);
    const color_5 = p5.lerpColor(p5.color('white'), p5.color(color), 0.8);

    let maxblocks;
    if((radius*2)%2 === 0) {
      maxblocks = Math.ceil(radius - .5) * 2 + 1;
    } else {
      maxblocks = Math.ceil(radius) * 2;
    }

    let matrix = [], i = 0;
    for( let y = -maxblocks / 2 + 1; y <= maxblocks / 2 - 1; y++ ) {
      matrix[i] = [];
      for( let x = -maxblocks / 2 + 1; x <= maxblocks / 2 - 1; x++ ) {                
        if(filled(x, y, radius)) {
          if(fatfilled(x, y, radius) && !(fatfilled(x + (x > 0 ? 1 : -1), y, radius) && fatfilled(x, y + (y > 0 ? 1 : -1), radius))) {
            matrix[i].push(borderColor)
          } else if(filled(x+2, y+2, 1)) {
            matrix[i].push(color_5);
          } else if(filled(x+2, y+2, radius-7)) {
            p5.random()<0.3 ? matrix[i].push(color_5) : matrix[i].push(color_4);
          } else if(filled(x+2, y+2, radius-6)) {
            matrix[i].push(color_4)
          } else if(filled(x+2, y+2, radius-4)) {
            p5.random()<0.3 ? matrix[i].push(color_4) : matrix[i].push(color_3);
          } else if(filled(x+1, y+1, radius-3)) {
            matrix[i].push(color_3)
          } else if(filled(x+1, y+1, radius-2)) {
            p5.random()<0.3 ? matrix[i].push(color_3) : matrix[i].push(color_2);
          } else if(filled(x+1, y+1, radius-1)) {
            matrix[i].push(color_2)
          } else {
            matrix[i].push(color_1)
          }
        } else {
          matrix[i].push(null)
        }
      }
      i++;
    }

    return matrix;
  }

  function drawPixelCircle(matrix, position) {
    p5.push();
    p5.translate(position.x, position.y);
    for( let y = 0; y < matrix.length; y++ ) {
      for( let x = 0; x < matrix.length; x++ ) {
        if(matrix[y][x]) {
          const xp = (x - matrix.length/2)*pixelWidth;
          const yp = (y - matrix.length/2)*pixelWidth;

          p5.fill(matrix[y][x]);
          p5.rect(xp, yp, pixelWidth);
        }
      }
    }
    p5.pop();
  }
}
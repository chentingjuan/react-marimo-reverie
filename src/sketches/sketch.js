
import { vert, frag } from './tab2';

export default function sketch(p5) {
  const { windowWidth, windowHeight, WEBGL } = p5;
  let colors = "a2ca3d-81bc3f-5fad41-3e954b-2d8950-1c7c54-48af7e".split("-").map(a=>"#"+a);
  let marimos = [], numOfMarimos = 10, nutritions = [], numOfNutritions = 5;
  let user;
  let bubbles = [], sounds = [];
  const chewingTime = 300;
  const userColor = '#219EBC', nutritionColor = '#6B705C';
  // let _text;
  let sh;
  let props;

  // preload = () => {
  //   // let a = loadSound("divided.mp3");
  //   // sounds.push(a)
  // }

  p5.myCustomRedrawAccordingToNewPropsHandler = (theProps) => {
    props = theProps;
    // if (props.rotation) {
    //   rotation = (props.rotation * Math.PI) / 180;
    // }
  };

  p5.setup = () => {
    p5.createCanvas(windowWidth, windowHeight, WEBGL);
    
    numOfMarimos = Math.floor(windowWidth*windowHeight/90000);
    numOfNutritions = Math.floor(windowWidth*windowHeight/90000);
    let dep = p5.max(windowWidth,windowHeight);
    p5.ortho(-windowWidth / 2, windowWidth / 2, -windowHeight / 2, windowHeight / 2, -dep*2 , dep*2.5);
    p5.noStroke();
    
    //shader
    sh = p5.createShader(vert,frag);
    p5.shader(sh);
    sh.setUniform("u_resolution", [windowWidth,windowHeight]);
    sh.setUniform("u_lightDir", [1,1,-1]);
    
    marimos=[];
    for(let i=0; i<numOfMarimos; i++){
      marimos.push(new Marimo({
        position: p5.createVector(p5.random(-windowWidth/2, windowWidth/2), p5.random(-windowHeight/2, windowHeight/2)),
        vector: p5.constructor.Vector.random2D(),
        radius: p5.random(50, 80),
        color: colors[Math.floor(p5.random(colors.length))],
      }));
    }
    
    nutritions=[];
    for(let i=0; i<numOfNutritions; i++){
      nutritions.push(new Nutrition({
        position: p5.createVector(p5.random(-windowWidth/2, windowWidth/2), p5.random(-windowHeight/2, windowHeight/2)),
      }))
    }
    
    user = new User();
  }

  p5.draw = () => {
    p5.background('#DEF0F7');
    // console.log(windowWidth, windowHeight)
    if (p5.frameCount % 50 === 0) {
      let position = p5.createVector(p5.random(-windowWidth/2, windowWidth/2), p5.random(-windowHeight/2, windowHeight/2));
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
        if(m.position.dist(n.position)<(m.radius+n.radius)/1) {
          m.radius+=1;
          n.eaten=true;
        }
      })
      
      // hit user
      if(user.radius>1) {
        if(!m.chewing && m.position.dist(user.position)<(m.radius+user.radius)/1) {
          m.radius+=1;
          m.chewing = true;
          user.radius-=2;
        }
      } else {
        // console.log("Game over!")
        // alert("Game Over!");
        // setup();
      }
      
      // divide
      if(m.radius>80) {
        // sounds[0].play();
        m.radius=50;
        m.position.sub(10, 0);
        marimos.push(new Marimo({
          position: m.position.copy().add(20, 0),
          vector: p5.createVector(0, 0),
          radius: 50,
          color: m.color,
        }));
      }
      
      // add bubbles
      if (p5.random()<0.02){
        let offset = p5.random(-m.radius, m.radius);
        bubbles.push({
          p: m.position.copy().add(offset),
          v: p5.createVector(0, p5.random(-0.5,-5)),
          r: p5.random(1,6),
          opacity: p5.random(0.1, 500)
        })
      }
    })
    
    // nutritions...
    nutritions.filter(n => !n.eaten).forEach(n => {
      n.draw()
      
      // hit user
      if(user.position.dist(n.position)<(user.radius+n.radius)/1) {
        user.radius+=2;
        n.eaten=true;
      }
    });
    
    // bubbles...
    bubbles.forEach(b=>{
      drawSphere(p5.color(255), p5.createVector(b.p.x + p5.noise(b.p.y/20)*b.r*2, b.p.y, 100), b.r);
        b.p.y+=b.v.y;
    })
    bubbles = bubbles.filter(b=>b.p.y>-windowHeight/2)
    
    user.update();
    user.draw();

    props.setNumOfMarimos(marimos.length)
  }

  class Marimo {
    constructor(params) {
      this.position = params.position;
      this.vector = params.vector;
      this.radius = params.radius;
      this.color = params.color;
      this.chewing = false;
      this.chewingTimer = chewingTime;
      // this.colliding=false;
    }
    draw() {
      drawSphere(this.chewing?userColor:this.color, this.position, this.radius);
    }
    update() {
      this.position.add(this.vector)
      if(p5.frameCount%900===0) this.vector.mult(0.9)
      
      // hit the wall
      if(p5.abs(this.position.x) > windowWidth/2) this.vector.x = -1.3*this.vector.x;
      if(p5.abs(this.position.y) > windowHeight/2) this.vector.y = -1.3*this.vector.y;
      
      // hit the marimos
      marimos.forEach(m => {
        if (this!==m){
          if (this.position.dist(m.position)<(this.radius+m.radius)/1) {
            //add sounds
            // 
          }

          if (this.position.dist(m.position)<(this.radius+m.radius)/1.2) {
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
  }

  class Nutrition {
    constructor(params) {
      this.position = params.position;
      this.radius = 5;
      this.eaten=false;
    }
    draw() {
      drawSphere(nutritionColor, this.position, this.radius);
    }
    updatePosition() {
      this.position.set(p5.random(-windowWidth/2, windowWidth/2), p5.random(-windowHeight/2, windowHeight/2));
    }
  }

  class User {
    constructor(params) {
      this.position = p5.createVector(-windowWidth/2, -windowHeight/2);
      this.radius = 9;
      this.eatenable = true;
    }
    draw() {
      drawSphere(userColor, this.position, this.radius);
    }
    update() {
      const easing = 0.01;
      
      let targetX = p5.mouseX - windowWidth/2;
      let dx = targetX - this.position.x;
      this.position.x += dx * easing;

      let targetY = p5.mouseY - windowHeight/2;
      let dy = targetY - this.position.y;
      this.position.y += dy * easing;
    }
  }

  function setCol(shader,uniformName,colStr) {
    let col = p5.color(colStr);
    let colArray = col._array;
    colArray.pop();
    shader.setUniform(uniformName,colArray);
  }

  function drawSphere(color, position, radius) {
    p5.push();
      setCol(sh,"u_col", color);
      p5.translate(position);
      p5.sphere(radius);
    p5.pop();
  }
}
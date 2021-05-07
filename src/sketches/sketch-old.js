// import * as p5 from 'p5'
// import "./../lib/p5.play.js";
import imgMarimo from '../assets/images/marimo.png';

export default function sketch(p5) {
  // require('../lib/p5.play.js');

  let img;
  let canvasWidth = p5.windowWidth, canvasHeight = p5.windowHeight;
  let wall = {};
  let wallThick = 10;
  // let rotation = 0;

  p5.preload = () => {
    img = p5.loadImage(imgMarimo);

    addWall();
  }

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL);

  }

  p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    // if (props.rotation) {
    //   rotation = (props.rotation * Math.PI) / 180;
    // }
  };

  p5.draw = () => {
    p5.background(0, 0, 0);
    // p5.background(100);
    // p5.normalMaterial();
    // p5.noStroke();

    // p5.push();
    // p5.translate(-40, 50);
    // p5.rotateY(rotation);
    // p5.rotateX(-0.9);
    // p5.box(100);
    // p5.pop();

    // p5.noFill();
    // p5.stroke(255);
    // p5.push();
    // p5.translate(400, p5.height * 0.35, -200);
    // p5.sphere(300);
    // p5.pop();
  };

  const addWall = () => {
    wall.t = p5.createSprite(
      canvasWidth / 2,
      -wallThick / 2,
      canvasWidth + wallThick * 2,
      wallThick
    );
    wall.t.immovable = true;
  
    wall.b = p5.createSprite(
      canvasWidth / 2,
      canvasHeight + wallThick / 2,
      canvasWidth + wallThick * 2,
      wallThick
    );
    wall.b.immovable = true;
  
    wall.l = p5.createSprite(
      -wallThick / 2,
      canvasHeight / 2,
      wallThick,
      canvasHeight
    );
    wall.l.immovable = true;
  
    wall.r = p5.createSprite(
      canvasWidth + wallThick / 2,
      canvasHeight / 2,
      wallThick,
      canvasHeight
    );
    wall.r.immovable = true;
  }
}
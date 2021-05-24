export default function sketch(p5) {
  const { windowWidth, windowHeight } = p5;
  // let colors = "a2ca3d-81bc3f-5fad41-3e954b-2d8950-1c7c54-48af7e".split("-").map(a=>"#"+a);
  // let marimos = [], numOfMarimos = 10, nutritions = [], numOfNutritions = 5;
  // let user = null;
  // let bubbles = [], sounds = [];
  // const chewingTime = 300, eateningTime = 25;
  // const userColor = '#219EBC';
  // const userEasing = 0.01;
  // // const nutritionColor = '#6B705C';
  // const nutritionColor = '#fff';
  let props = {};
  // let pixelWidth = 6;
  // let playTimerInterval = null;
  // let countDownTimerInterval = null, countDownTimer = 3;
  // let started = false;
  const userTrackInterval = 20;
  let index = 0;

  p5.myCustomRedrawAccordingToNewPropsHandler = (theProps) => {
    // if(props.clickedStart !== theProps.clickedStart && theProps.clickedStart) {
    //   startGame();
    // }
    props = theProps;
  };

  p5.setup = () => {
    p5.createCanvas(windowWidth, windowHeight);
    p5.noStroke();

    index = 0;
  }

  p5.draw = () => {
    // p5.background('black');
    p5.fill(props.userColor);

    // if(p5.frameCount%userTrackInterval===0 ) {
    if(index < props.userPath.length) {
      p5.circle(props.userPath[index].x, props.userPath[index].y, 3);
      index++;
    }
  }
}
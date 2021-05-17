import React, { useState } from "react";
import { gsap, Power4 } from "gsap";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/sketch";

const GamePage = () => {
  const [numOfMarimos, setNumOfMarimos] = useState(0);
  const [timer, setTimer] = useState(null);

  return <>
    <div className="data-box">
        <p>Number of Marimos: {numOfMarimos}</p>
        <p>Timer: {timer}</p>
      </div>  
      <P5Wrapper
        sketch={sketch} 
        setNumOfMarimos={setNumOfMarimos}
        timer={timer}
        setTimer={setTimer}
        // rotation={state.rotation} 
      />
  </>;
};

export default GamePage;
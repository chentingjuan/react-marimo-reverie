import React, { useState } from "react";
import { gsap, Power4 } from "gsap";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/sketch";
import { navigate } from "@reach/router";

const GamePage = () => {
  const [numOfMarimos, setNumOfMarimos] = useState(0);
  const [timer, setTimer] = useState(null);

  return pug`
    div(className="data-box")
      p Number of Marimos: #{numOfMarimos}
      p Timer: #{timer}

    P5Wrapper(
      sketch=sketch 
      setNumOfMarimos=setNumOfMarimos
      timer=timer
      setTimer=setTimer
      isGameOver=()=>navigate('/the-end'))
  `;
};

export default GamePage;
import React, { useState, useContext } from "react";
import { gsap, Power4 } from "gsap";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/sketch";
import { navigate } from "@reach/router";

// import UserDataContext from "./../userDataContext";
import { ContextStore } from "./../hooks/useContextUserData";

import pjson from "./../../package.json";

const GamePage = () => {
  const [started, setStarted] = useState(false);
  const [numOfMarimos, setNumOfMarimos] = useState(0);
  const [timer, setTimer] = useState(null);

  const contextType = useContext(ContextStore);
  const {
    userName,
    setUserName,
    userColor,
    setUserColor,
    userPlayedTime,
    setUserPlayedTime
  } = contextType;

  return pug`
    section(className="section-page game")
      div(className="data-box")
        // p Number of Marimos: #{numOfMarimos}
        p Timer: #{timer}

      P5Wrapper(
        sketch=sketch 
        started=started
        setNumOfMarimos=setNumOfMarimos
        timer=timer
        setTimer=setTimer
        isGameOver=()=>{
          setUserPlayedTime(timer)
          navigate(pjson.basepath+'/the-end')
        })

      if !started
        div(className="modal-wrapper")
          div(className="modal")
            div(className="form-row")
              label Choose a color
              input
            
            div(className="form-row")
              label Enter your name
              input(
                defaultValue=userName
                onChange=e=>setUserName(e.target.value)
              )

            a(className="btn-hl" onClick=()=>setStarted(true)) Ready
  `;
};

export default GamePage;
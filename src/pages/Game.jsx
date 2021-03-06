import React, { useState, useContext, useEffect } from "react";
import { gsap, Power4 } from "gsap";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/sketch";
import { navigate } from "@reach/router";
import colors from "./../constant/user-colors"

// import UserDataContext from "./../userDataContext";
import { ContextStore } from "./../hooks/useContextUserData";

import Header from "./../components/Header";

import pjson from "./../../package.json";

const GamePage = () => {
  const [started, setStarted] = useState(false);
  const [numOfMarimos, setNumOfMarimos] = useState(0);
  // const [time, setTime] = useState(null);

  const contextType = useContext(ContextStore);
  const {
    userName,
    setUserName,
    userColor,
    setUserColor,
    userPlayedTime,
    setUserPlayedTime,
    userPath,
    setUserPath,
  } = contextType;

  useEffect(() => {
    setUserPlayedTime(0);
    setUserPath([]);
  }, []);

  return pug`
    section(className="section-page game")
      Header(mode="game", time=userPlayedTime)

      P5Wrapper(
        sketch=sketch 
        clickedStart=started
        setNumOfMarimos=setNumOfMarimos
        time=userPlayedTime
        setTime=setUserPlayedTime
        setUserPath=setUserPath
        userColor=userColor
        isGameOver=()=>{
          navigate(pjson.basepath+'/the-end')
        })

      if !started
        div(className="modal-wrapper")
          div(className="modal")
            div(className="form-row")
              label Select a color
              div(className="select-items")
                each color in colors
                  div(
                    style={'backgroundColor': color}
                    className=(color===userColor)?"select-item active":"select-item"
                    onClick=()=>setUserColor(color))

            div(className="form-row")
              label Enter your name
              input(
                defaultValue=userName
                onChange=e=>setUserName(e.target.value)
              )
            
            div(className="btn-wrapper")
              a(className="btn btn-hl" onClick=()=>setStarted(true)) Ready
  `;
};

export default GamePage;
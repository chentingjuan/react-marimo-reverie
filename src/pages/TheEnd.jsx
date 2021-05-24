import React, { useEffect, useContext } from "react";
import { gsap, Power4 } from "gsap";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/sketch-track";
import Link from "./../components/Link"

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import { ContextStore } from "./../hooks/useContextUserData";

const TheEnd = () => {
  const contextType = useContext(ContextStore);
  const {
    userName,
    setUserName,
    userColor,
    setUserColor,
    userPlayedTime,
    setUserPlayedTime,
    userPath
  } = contextType;

  // useEffect(() => {
  //   console.log(userPath)
  // }, []);

  return pug`
    section(className="section-page the-end") 
      Header(time=userPlayedTime)

      if userPath.length
        P5Wrapper(
          sketch=sketch 
          userPath=userPath
          userColor=userColor)

      div(className="content")
        h1 Game Over
        Link(to="/game" className="btn btn-hl") Try Again

      Footer
  `;
};

export default TheEnd;
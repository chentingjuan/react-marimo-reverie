import React, { useEffect, useContext } from "react";
import { gsap, Power4 } from "gsap";
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
    setUserPlayedTime
  } = contextType;

  return pug`
    section(className="section-page the-end") 
      Header(
        displayLogo=false
        time=userPlayedTime
      )
      
      div
        h1 Game Over
        Link(to="/game" className="btn-hl") Try Again

      Footer
  `;
};

export default TheEnd;
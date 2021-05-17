import React, { useEffect, useContext } from "react";
import { gsap, Power4 } from "gsap";
import Link from "./../components/Link"

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import UserDataContext from "./../userDataContext";

const TheEnd = () => {
  const contextType = useContext(UserDataContext);
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
      Header

      span #{userPlayedTime}

      div
        h1 Game Over
        Link(to="/game" className="btn-hl") Try Again

      Footer
  `;
};

export default TheEnd;
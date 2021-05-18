import React from "react";
import PropTypes from "prop-types";

import { gsap, Power4 } from "gsap";
import Link from "../components/Link";
import { navigate, useLocation } from "@reach/router";

import realPic from "./../assets/images/real-picture.png";

const About = () => {
  const location = useLocation();

  return pug`
    section(className="section-page about")
      h1(className="title") About
      
      div(className="content")
        p Marimo Rêverie is a web-browser game that connects to an actual marimo terrarium with sensors. The avatars of algae in cyberspace are constantly changing with their living environment in real time, floating around and competing with the player for generative nutrients in the browser window.
        
        img(src=realPic alt="My Marimo")

      div(className="btn-wrapper")
        if !location.state
          Link(to="/" className="btn btn-hl") Got it
          
        else
          a(onClick=()=>navigate(-1) className="btn btn-hl") Got it
  `;
}

export default About;
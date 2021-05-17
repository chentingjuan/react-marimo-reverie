import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "../components/Link";

import realPic from "./../assets/images/real-picture.png";

const About = () => pug`
  section
    h1 About
    
    p Marimo Rêverie is a web-browser game that connects to an actual marimo terrarium with sensors. The avatars of algae in cyberspace are constantly changing with their living environment in real time, floating around and competing with the player for generative nutrients in the browser window.
    
    img(src=realPic alt="My Marimo")

    Link(to="/") Got it
`;

export default About;
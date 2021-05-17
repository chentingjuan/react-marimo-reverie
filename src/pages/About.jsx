import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "../components/LinkWithTransitionLock";

const About = () => {
  return <>
    <h1>About</h1>
    <p>Marimo Rêverie is a web-browser game that connects to an actual marimo terrarium with sensors. The avatars of algae in cyberspace are constantly changing with their living environment in real time, floating around and competing with the player for generative nutrients in the browser window.</p>
    <Link to="/">
      Got it
    </Link>
  </>;
};

export default About;
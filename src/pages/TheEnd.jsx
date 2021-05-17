import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "./../components/Link"

import Header from "./../components/Header";
import Footer from "./../components/Footer";

const TheEnd = () => {
  return pug`
    section(className="section-page the-end") 
      Header

      div
        h2 Game Over
        Link(to="/game") Try Again

      Footer
  `;
};

export default TheEnd;
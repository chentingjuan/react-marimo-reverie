import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "../components/Link";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

const Home = () => pug`
  section(className="section-page home")
    Header

    Link(to="/game" className="btn btn-hl") Play Game

    Footer
`;

export default Home;
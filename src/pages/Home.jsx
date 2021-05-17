import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "../components/LinkWithTransitionLock";

const Home = () => {
  return <>
    <section>
      <Link to="/game">
        Play Game
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/rules">
        ?
      </Link>
      {/* <p>wefwef</p>
      <p>wefwef</p>
      wjef;ijq;wef
      qwefqwe */}
    </section>
  </>;
};

export default Home;
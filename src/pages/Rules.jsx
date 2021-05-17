import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "../components/LinkWithTransitionLock";

const Rules = () => {
  return <>
    <h1>The Rules</h1>
    <p>You will need to compete with the algae for the nutrients floating in the window. The more nutrients you get, the bigger you will become.</p>
    <p>When the marimos get enough nutrients, they will split. The nutrients points will be regenerated all the time, so the game will become more and more difficult. When the marimos touch the player, the nutrients will be taken away, and the player will become smaller. I will feed the nutrition powder based on the score received by marimos.</p>
    <Link to="/">
      Got it
    </Link>
  </>;
};

export default Rules;
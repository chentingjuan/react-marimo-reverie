import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";

const Loading = () => {
  useEffect(() => {
    gsap.to("#loading-wrapper", {
      opacity: 0,
      duration: 1,
      delay: 0,
      pointerEvents: 'none'
      // ease: Power4.easeOut,
    })
    // var loading_timeline = new TimelineMax();
    // loading_timeline
    //   .to(".logo_item.front", {
    //     width: "100%",
    //     duration: 3,
    //     delay: 0.1,
    //     ease: Expo.easeInOut,
    //   })
    //   .to(".loading_cover", {
    //     opacity: 0,
    //     pointerEvents: "none",
    //     duration: 1,
    //     delay: 0.6,
    //     ease: Power4.easeOut,
    //   });
  });

  return pug`
    div(id="loading-wrapper") Marimo Rêverie
  `
}

export default Loading;
import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";

const Loading = () => {
  useEffect(() => {
    gsap.to("#loading-wrapper", {
      duration: 1,
      delay: 3,
      opacity: 0,
      pointerEvents: 'none'
      // ease: Power4.easeOut,
    });
    gsap.to(".loader", {
      duration: 1,
      delay: 2,
      opacity: 0,
    })
  }, []);

  return pug`
    div(id="loading-wrapper")
      div(className="loader")
        span M

        span a

        span r

        span i

        span m

        span o

        span _

        span R

        span ê

        span v

        span e

        span r

        span i

        span e
  `
}

export default Loading;
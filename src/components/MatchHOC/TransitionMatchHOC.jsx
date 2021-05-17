import React from "react";
import PropTypes, { arrayOf } from "prop-types";
import { Match } from "@reach/router";
import { Transition } from "react-transition-group";
import { gsap, Power3 } from "gsap";

import {
  START_TRANSITION,
  END_TRANSITION,
  ContextStore,
} from "../../hooks/useContextSPATransitionLock.js";

import sty from "./TransitionMatchHOC.module.scss";

const TransitionMatchHOC = ({ children, path }) => {
  const { dispatchTransitionType } = React.useContext(ContextStore);
  
  return (
    <Match path={path}>
      {({ match }) => {
        // console.log(match);
        return (
          <Transition
            in={match !== null}
            appear
            mountOnEnter
            unmountOnExit
            addEndListener={(node, done) => {
              if (match !== null) {
                console.log("in");
                dispatchTransitionType({
                  type: START_TRANSITION,
                });
                gsap.to(node, {
                  // top: "5%",
                  duration: 0.3,
                  opacity: 1,
                  delay: 0.3,
                  ease: Power3.easeInOut,
                  onComplete: () => {
                    dispatchTransitionType({
                      type: END_TRANSITION,
                    });
                    // done();
                  },
                });
              } else {
                console.log("out");
                gsap.to(node, {
                  // top: "-5%",
                  opacity: 0,
                  duration: 0.3,
                  ease: Power3.easeInOut,
                  // onComplete: done,
                  onComplete: () => {
                    dispatchTransitionType({ type: END_TRANSITION });
                    done();
                  },
                });
              }
            }}
          >
            <div id="wrap" className={sty.TransitionMatchHOC}>
              {/* {children} */}
              {React.cloneElement(children, match)}
            </div>
          </Transition>
        );
      }}
    </Match>
  );
};

TransitionMatchHOC.propTypes = {
  children: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default TransitionMatchHOC;

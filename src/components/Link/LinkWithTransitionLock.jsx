import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "@reach/router";

import { ContextStore } from "../../hooks/useContextSPATransitionLock.js";

import pjson from "./../../../package.json";

const basepath = pjson.basepath

const LinkWithTransitionLock = ({ children, to, ...restProps }) => {
  const { SPA: isTransitionDone } = React.useContext(ContextStore);
  const location = useLocation();

  return (
    <Link
      {...restProps}
      to={ basepath + to } 
      state={{ prevPath: location.pathname }}
      style={{ pointerEvents: isTransitionDone ? "default" : "none" }}
    >
      {children}
    </Link>
  );
};

LinkWithTransitionLock.propTypes = {
  children: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
};

export default LinkWithTransitionLock;

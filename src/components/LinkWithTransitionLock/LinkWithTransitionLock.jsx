import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import { ContextStore } from "../../hooks/useContextSPATransitionLock.js";

const LinkWithTransitionLock = ({ children, ...restProps }) => {
  const { SPA: isTransitionDone } = React.useContext(ContextStore);

  return (
    <Link
      {...restProps}
      style={{ pointerEvents: isTransitionDone ? "default" : "none" }}
    >
      {children}
    </Link>
  );
};

LinkWithTransitionLock.propTypes = {};

export default LinkWithTransitionLock;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap, Power4 } from "gsap";

import Link from "./../components/Link"

import iconClock from "./../assets/icons/clock.svg";
import { formattedTimer } from "./../utils";

const Header = props => pug`
  header(className=props.mode)
    Link(to="/" className="logo") 
      span Marimo
      span Rêverie

    if props.time !== -1
      div(className="time")
        img(src=iconClock alt="")
        span #{formattedTimer(props.time)}
`;

Header.propTypes = {
  mode: PropTypes.string,
  time: PropTypes.number
};

Header.defaultProps = {
  mode: 'normal',
  time: -1,
}

export default Header;
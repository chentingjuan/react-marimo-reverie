import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap, Power4 } from "gsap";

import Link from "./../components/Link"

import iconClock from "./../assets/icons/clock.svg";

const Header = props => pug`
  header(className=props.mode)
    Link(to="/") Marimo Reverie

    div
      img(src=iconClock alt="")
      span #{props.time}
`;

Header.propTypes = {
  mode: PropTypes.string,
  time: PropTypes.number
};

Header.defaultProps = {
  mode: 'normal',
  time: 0,
}

export default Header;
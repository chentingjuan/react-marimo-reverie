import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "../components/Link";

const Footer = () => pug`
  footer
    Link(to="/about") About
    Link(to="/rules") ?
`;

export default Footer;
import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import Link from "../components/Link";

import iconSoundOn from "./../assets/icons/sound-on.svg";
import iconQuestionMark from "./../assets/icons/question-mark.svg";

const Footer = () => pug`
  footer
    Link(to="/about") About

    Link(to="/rules")
      img(src=iconQuestionMark)

    Link(to="/")
      img(src=iconSoundOn)
`;

export default Footer;
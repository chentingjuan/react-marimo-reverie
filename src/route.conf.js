import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
import TheEnd from "./pages/TheEnd";
import pjson from "./../package.json";

const basepath = pjson.basepath

export default [
  { path: basepath + "/", Component: Home },
  { path: basepath + "/about", Component: About },
  { path: basepath + "/rules", Component: Rules },
  { path: basepath + "/game", Component: Game },
  { path: basepath + "/the-end", Component: TheEnd },
];

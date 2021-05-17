import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
import TheEnd from "./pages/TheEnd";

export default [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/rules", Component: Rules },
  { path: "/game", Component: Game },
  { path: "/the-end", Component: TheEnd },
];

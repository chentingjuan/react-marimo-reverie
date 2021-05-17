import React, { useState } from "react";

import './css/main.scss';
import Loading from "./components/Loading.jsx";

import routerConfig from "./route.conf.js";
import TransitionMatchHOC from "./components/TransitionMatchHOC";
import ContextProvider from "./hooks/useContextSPATransitionLock.js";

function App() {

  // console.log(routerConfig)
  
  return (
    <>
      <Loading />

      <ContextProvider>
        {routerConfig.map(({ path, Component }, index) => 
          <TransitionMatchHOC key={index + path} path={path}>
            <Component />
          </TransitionMatchHOC>
        )}
      </ContextProvider>
    </>
  );
}

export default App;

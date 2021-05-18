import React, { useState } from "react";

import './css/main.scss';
import Loading from "./components/Loading.jsx";

import routerConfig from "./route.conf.js";
import TransitionMatchHOC from "./components/MatchHOC";
import SPATransitionContextProvider from "./hooks/useContextSPATransitionLock.js";

import UserDataContextProvider from "./hooks/useContextUserData.js";

// import UserDataContext from './userDataContext'

function App() {  
  return (
    <>
      <Loading />

      <UserDataContextProvider>
        <SPATransitionContextProvider>
          {routerConfig.map(({ path, Component }, index) => 
            <TransitionMatchHOC key={index + path} path={path}>
              <Component />
            </TransitionMatchHOC>
          )}
        </SPATransitionContextProvider>
      </UserDataContextProvider>
    </>
  );
}

export default App;

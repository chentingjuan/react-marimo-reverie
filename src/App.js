import React, { useState } from "react";

import './css/main.scss';
import Loading from "./components/Loading.jsx";

import routerConfig from "./route.conf.js";
import TransitionMatchHOC from "./components/MatchHOC";
import ContextProvider from "./hooks/useContextSPATransitionLock.js";

import UserDataContext from './userDataContext'

function App() {
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');
  const [userPlayedTime, setUserPlayedTime] = useState('');
  const UserDataContextProvider = UserDataContext.Provider;
  const userDataContext = {
    userName,
    setUserName,
    userColor,
    setUserColor,
    userPlayedTime,
    setUserPlayedTime
  };

  return (
    <>
      <Loading />

      <UserDataContextProvider value={userDataContext}>
        <ContextProvider>
          {routerConfig.map(({ path, Component }, index) => 
            <TransitionMatchHOC key={index + path} path={path}>
              <Component />
            </TransitionMatchHOC>
          )}
        </ContextProvider>
      </UserDataContextProvider>
    </>
  );
}

export default App;

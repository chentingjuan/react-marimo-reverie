import React, { createContext, useState } from 'react'
import PropTypes from "prop-types";
import colors from "./../constant/user-colors"

const initState = {
  userName: '',
  setUserName: ()=>{},
  userColor: '',
  setUserColor: ()=>{},
  userPlayedTime: -1,
  setUserPlayedTime: ()=>{},
  userPath: [],
  setUserPath: ()=>{},
}

export const ContextStore = createContext(initState)

const ContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState(colors[0]);
  const [userPlayedTime, setUserPlayedTime] = useState(-1);
  const [userPath, setUserPath] = useState([]);

  const userDataContext = {
    userName,
    setUserName,
    userColor,
    setUserColor,
    userPlayedTime,
    setUserPlayedTime,
    userPath,
    setUserPath,
  };

  return (
    <ContextStore.Provider value={userDataContext}>
      {children}
    </ContextStore.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContextProvider;
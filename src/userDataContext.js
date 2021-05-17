import { createContext } from 'react'

const initState = {
  userName: '',
  setUserName: ()=>{},
  userColor: '',
  setUserColor: ()=>{},
  userPlayedTime: '',
  setUserPlayedTime: ()=>{}
}

export default createContext(initState)
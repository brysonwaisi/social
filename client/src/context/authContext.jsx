import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
    );

  const login = () => {
    // todo
    setCurrUser({id:1, name: 'Breezy'})
  }
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currUser))
  }, [currUser])

  return (
    <AuthContext.Provider value={{currUser, login}}>
      {children}
    </AuthContext.Provider>
  )
}
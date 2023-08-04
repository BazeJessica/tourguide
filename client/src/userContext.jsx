import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {data} from "autoprefixer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./DbConfig";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {

   const unsubscribe = onAuthStateChanged(auth, (user)=>{
    setUser(user)
   })
   setReady(true)
   return unsubscribe
  }, []);
  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}
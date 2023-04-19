import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {

      const [user, setUser] = useState(null);

      const createUser =(email, password)=>{
           return createUserWithEmailAndPassword(auth, email, password)
      }
      const signIn =(email, password)=>{
            return signInWithEmailAndPassword(auth, email, password)
      }

      const logOut = ()=>{
            return signOut(auth);
      }

useEffect(()=>{
     const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
          });
          return ()=>{
            unSubscriber();
          }
},[])

      const AuthInfo = {
            user,
            createUser,
            signIn,
            logOut
      }
     

      return (
            <AuthContext.Provider value={AuthInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProviders;
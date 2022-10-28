import {
  createContext, useContext, useEffect, useState,
} from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../Config/firebase';

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{
      createUser, user, logout, signIn,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserAuth = () => useContext(UserContext);

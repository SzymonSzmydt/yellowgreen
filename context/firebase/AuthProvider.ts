'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './Firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

type UserProps = {
  email: string;
  password: string;
};

const userAuthContext = createContext(null);

export function UserAuthContextProvider({ children }: any) {
  const [user, setUser] = useState<UserProps | null>(null);

  function signUp({ email, password }: UserProps) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn({ email, password }: UserProps) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithRedirect(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, signUp, logIn, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

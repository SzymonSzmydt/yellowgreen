import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
  User,
} from 'firebase/auth';
import { auth } from './Firebase';
import { useRouter } from 'next/router';

interface UserAuthContextProps {
  children: ReactNode;
}

export const userAuthContext = createContext<User | null>(null);

export function UserAuthContextProvider({ children }: UserAuthContextProps) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      router.push('/');
    });
    return () => unsubscribe();
  }, []);

  return (
    <userAuthContext.Provider value={user}>{children}</userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

export function googleSignIn() {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithRedirect(auth, googleAuthProvider);
}

export function logOut() {
  return signOut(auth);
}

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext';
import { auth } from '../lib/firebase';
import { IUseAuth, IUseAuthProps, IEmailLogInfos } from '../types/hooks.types';
import {
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { CONSTANTS } from '../constants';

const useAuth = ({
  secure = true,
  onCheckAuthStateSuccess,
}: IUseAuthProps): IUseAuth => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(constructUser(user));
        if (onCheckAuthStateSuccess) onCheckAuthStateSuccess();
      } else if (router.pathname !== CONSTANTS.PAGES.HOME.SLUG) {
        router.push(CONSTANTS.PAGES.HOME.SLUG);
      }
    });
  };

  useEffect(() => {
    if (user || !secure) return;
    checkAuthState();
  });

  const constructUser = (userDoc: User) => {
    return {
      uid: userDoc.uid,
      email: userDoc.email,
    };
  };

  const handleError = (error: any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('error >', {
      errorCode,
      errorMessage,
      email,
      credential,
    });
  };



  const googleAuthenticate = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(constructUser(result.user)))
      .finally(() => router.push(CONSTANTS.PAGES.DASHBOARD.SLUG))
      .catch((error) => handleError(error));
  };

  const emailRegister = ({ email, password }: IEmailLogInfos) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(constructUser(result.user)))
      .finally(() => router.push(CONSTANTS.PAGES.DASHBOARD.SLUG))
      .catch((error) => handleError(error));
  };

  const emailLogin = ({ email, password }: IEmailLogInfos) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(constructUser(result.user)))
      .finally(() => router.push(CONSTANTS.PAGES.DASHBOARD.SLUG))
      .catch((error) => handleError(error));
  };

  const logout = () => {
    signOut(auth)
      .then(() => setUser(undefined))
      .finally(() => router.push(CONSTANTS.PAGES.HOME.SLUG))
      .catch((error) => handleError(error));
  };

  return { user, googleAuthenticate, emailRegister, emailLogin, logout };
};

export default useAuth;

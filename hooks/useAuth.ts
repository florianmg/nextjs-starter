import { useState, useContext, useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';

const useAuth = ({
  secure = true,
  onCheckAuthStateSuccess,
}: IUseAuthProps): IUseAuth => {
  const [currentError, setCurrentError] = useState<string>('');
  const { user, setUser } = useContext(UserContext);
  const { t } = useTranslation();
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
    const message = t([`firebase_errors.${error.code}`, 'firebase_errors.generic']);
    setCurrentError(message);
  };

  const googleAuthenticate = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      setUser(constructUser(result.user))
      router.push(CONSTANTS.PAGES.DASHBOARD.SLUG)
    })
      .catch((error) => handleError(error));
  };

  const emailRegister = ({ email, password }: IEmailLogInfos) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setUser(constructUser(result.user))
      router.push(CONSTANTS.PAGES.DASHBOARD.SLUG)
    })
      .catch((error) => handleError(error));
  };

  const emailLogin = ({ email, password }: IEmailLogInfos) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(constructUser(result.user))
        router.push(CONSTANTS.PAGES.DASHBOARD.SLUG)
      })
      .catch((error) => handleError(error));
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(undefined)
        router.push(CONSTANTS.PAGES.HOME.SLUG)
      })
      .catch((error) => handleError(error));
  };

  return { user, googleAuthenticate, emailRegister, emailLogin, logout, currentError };
};

export default useAuth;

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext';
import { auth, firestore } from '../lib/firebase';
import { IUseAuth, IUseAuthProps, IEmailLogInfos, IRequest } from '../types/hooks.types';
import {
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';
// import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { ROUTES } from '../constants';
import useFirestore from './useFirestore';
import { Console } from 'console';

const useAuth = ({
  secure = true,
  onCheckAuthStateSuccess,
}: IUseAuthProps): IUseAuth => {
  const [currentError, setCurrentError] = useState<string>('');
  const { user, setUser } = useContext(UserContext);
  const { createUserCollection, createDigitalBookCollection }  = useFirestore();
  const router = useRouter();

  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(constructUser(user));
        if (onCheckAuthStateSuccess) onCheckAuthStateSuccess();
      } else if (router.pathname !== ROUTES.HOME) {
        router.push(ROUTES.HOME);
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
    setCurrentError(error.code);
  };

  const googleAuthenticate = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then( async (result) => {
      const isNewUser = result.user.metadata.creationTime === result.user.metadata.lastSignInTime;
      if(isNewUser) {
        await createDigitalBookCollection(result.user.uid);
        await createUserCollection(result.user.uid);
      }
      setUser(constructUser(result.user))
      router.push(ROUTES.DASHBOARD)
    })
      .catch((error) => handleError(error));
  };

  const emailRegister = ({ email, password }: IEmailLogInfos) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      await createDigitalBookCollection(result.user.uid);
      await createUserCollection(result.user.uid);
      setUser(constructUser(result.user))
      router.push(ROUTES.DASHBOARD)
    })
      .catch((error) => handleError(error));
  };

  const emailLogin = ({ email, password }: IEmailLogInfos) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(constructUser(result.user))
        router.push(ROUTES.DASHBOARD)
      })
      .catch((error) => handleError(error));
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(undefined)
        router.push(ROUTES.DASHBOARD)
      })
      .catch((error) => handleError(error));
  };

  const sendNewPasswordRequest = async (email: string): Promise<IRequest> => {

    return sendPasswordResetEmail(auth, email)
      .then(() => {
        return {
          success: true
        }
      })
      .catch((error) => {
        handleError(error) 
        return {
          success: false
        };
      })

  }

  return { user, googleAuthenticate, emailRegister, emailLogin, logout, currentError, sendNewPasswordRequest };
};

export default useAuth;

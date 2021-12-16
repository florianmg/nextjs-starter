import '../styles/reset.css';
import '../styles/globals.scss';
import '../styles/variables.scss';
import '../i18n';
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import IUser from '../types/user.types';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;

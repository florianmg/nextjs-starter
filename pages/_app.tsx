import '../styles/reset.css';
import '../styles/globals.scss';
import '../styles/variables.scss';
import '../i18n';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { UserContext } from '../contexts/UserContext';
import IUser from '../types/user.types';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default appWithTranslation(MyApp);

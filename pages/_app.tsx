import '../styles/globals.scss';
import '../i18n';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar isLogged />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

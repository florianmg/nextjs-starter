import '../styles/reset.css';
import '../styles/globals.scss';
import '../styles/variables.scss';
import '../i18n';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar isLogged={true} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

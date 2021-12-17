import type { NextPage } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navbar } from '../components/layout';
import { useTranslation } from 'next-i18next';
import useAuth from '../hooks/useAuth';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth({ secure: true });
  return (
    <>
      <Navbar isLogged={!!user} onLogout={logout} />
      <div>Welcome to {t('app_name')}</div>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Home;

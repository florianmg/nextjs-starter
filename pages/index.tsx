import type { NextPage } from 'next';
import { Navbar } from '../components/layout';
import { useTranslation } from 'react-i18next';
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

export default Home;

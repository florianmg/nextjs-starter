import useAuth from '../hooks/useAuth';
import { Navbar } from '../components/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Dashboard = () => {
  const { user, logout } = useAuth({ secure: true });

  return (
    <div>
      <Navbar isLogged={!!user} onLogout={logout} />
      Dashboard page ! <br /> Welcome {user?.email}
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Dashboard;

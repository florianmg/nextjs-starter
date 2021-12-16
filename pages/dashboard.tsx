import useAuth from '../hooks/useAuth';
import { Navbar } from '../components/layout';

const Dashboard = () => {
  const { user, logout } = useAuth({ secure: true });

  return (
    <div>
      <Navbar isLogged={!!user} onLogout={logout} />
      Dashboard page ! <br /> Welcome {user?.email}
    </div>
  );
};

export default Dashboard;

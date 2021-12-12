import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return <div>Welcome to {t('app_name')}</div>;
};

export default Home;

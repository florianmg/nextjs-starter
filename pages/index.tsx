import type { NextPage } from 'next';
import { useState } from 'react';
import { Modal } from '../components/layout';
import { Button, InputText, Select } from '../components/form';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div>Welcome to {t('app_name')}</div>
    </>
  );
};

export default Home;

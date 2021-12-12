import type { NextPage } from 'next';
import { useState } from 'react';
import { Modal } from '../components/layout';
import { Button } from '../components/form';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          cupiditate repudiandae libero a? Ipsum, rem consectetur, incidunt
          voluptatem iure ut blanditiis iste quod obcaecati est a ab, ipsam qui
          impedit!
        </div>
      </Modal>
      <Button
        value="Open the modal"
        onPress={() => setIsModalOpen(!isModalOpen)}
      />
      <div>Welcome to {t('app_name')}</div>
    </>
  );
};

export default Home;

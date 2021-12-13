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
      <InputText value="test" onChange={() => null} />
      <InputText type="password" value="test" onChange={() => null} />
      <Select
        onChange={() => null}
        options={[
          {
            value: '1',
            content: 'option 1',
          },
          {
            value: '2',
            content: 'option 2',
          },
          {
            value: '3',
            content: 'option 3',
          },
        ]}
      />
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

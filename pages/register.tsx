import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useAuth from '../hooks/useAuth';
import { Button, InputText } from '../components/form';
import { CONSTANTS } from '../constants';

const Register = () => {
  const { t } = useTranslation('register');
  const { emailRegister, googleAuthenticate, currentError } = useAuth({
    secure: false,
  });
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    emailRegister(formValues);
  };

  return (
    <main>
      <div>
        <h1>{t('title')}</h1>
        <h1>{currentError}</h1>
        <form onSubmit={handleFormSubmit}>
          <InputText
            label={t('form.email')}
            type="email"
            value={formValues.email}
            required
            onChange={(value) => setFormValues({ ...formValues, email: value })}
          />
          <InputText
            label={t('form.password')}
            value={formValues.password}
            type="password"
            minLength={6}
            required
            onChange={(value) =>
              setFormValues({ ...formValues, password: value })
            }
          />
          <Button
            value={t('form.button')}
            onSubmit={handleFormSubmit}
            type="submit"
          />
        </form>

        <Link href={CONSTANTS.PAGES.LOGIN.SLUG}>
          <a>{t('already_account')}</a>
        </Link>
        <Button
          type="button"
          onClick={googleAuthenticate}
          value={t('register_page.btn_gmail_register')}
        />
      </div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['register'])),
    },
  };
};

export default Register;

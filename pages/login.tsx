import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button, InputText } from '../components/form';
import useAuth from '../hooks/useAuth';
import { CONSTANTS } from '../constants';

const Login = () => {
  const { t } = useTranslation('login');
  const { googleAuthenticate, emailLogin, currentError } = useAuth({
    secure: false,
  });

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    emailLogin(formValues);
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
            required
            minLength={6}
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
        <Link href={CONSTANTS.PAGES.REGISTER.SLUG}>
          <a>{t('no_account')}</a>
        </Link>
        <Button
          type="button"
          onClick={googleAuthenticate}
          value={t('login_page.btn_gmail_connect')}
        />
      </div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login'])),
    },
  };
};

export default Login;

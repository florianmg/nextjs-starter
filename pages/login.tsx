import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Button,
  InputText,
  GoogleAuthenticateButton,
} from '../components/form';
import useAuth from '../hooks/useAuth';
import { ROUTES } from '../constants';

const Login = () => {
  const { t } = useTranslation();
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
        <h1>{t('login:title')}</h1>
        {currentError && <p>{t(`errors:firebase_errors.${currentError}`)}</p>}
        <form onSubmit={handleFormSubmit}>
          <InputText
            label={t('login:form.email')}
            type="email"
            value={formValues.email}
            required
            onChange={(value) => setFormValues({ ...formValues, email: value })}
          />
          <InputText
            label={t('login:form.password')}
            value={formValues.password}
            type="password"
            required
            minLength={6}
            onChange={(value) =>
              setFormValues({ ...formValues, password: value })
            }
          />
          <Button
            value={t('login:form.button')}
            onSubmit={handleFormSubmit}
            type="submit"
          />
        </form>
        <Link href={ROUTES.REGISTER}>
          <a>{t('login:no_account')}</a>
        </Link>
        <GoogleAuthenticateButton
          value={t('login:form.google_auth')}
          onClick={googleAuthenticate}
        />
      </div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login', 'errors'])),
    },
  };
};

export default Login;

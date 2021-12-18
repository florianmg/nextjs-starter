import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useAuth from '../hooks/useAuth';
import {
  Button,
  InputText,
  GoogleAuthenticateButton,
  ErrorMessage,
} from '../components/form';
import { ROUTES } from '../constants';

const Register = () => {
  const { t } = useTranslation();
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
        <h1>{t('auth:register.title')}</h1>
        <ErrorMessage errorCode={currentError} />
        <form onSubmit={handleFormSubmit}>
          <InputText
            label={t('auth:email')}
            type="email"
            value={formValues.email}
            required
            onChange={(value) => setFormValues({ ...formValues, email: value })}
          />
          <InputText
            label={t('auth:password')}
            value={formValues.password}
            type="password"
            minLength={6}
            required
            onChange={(value) =>
              setFormValues({ ...formValues, password: value })
            }
          />
          <Button
            value={t('auth:register.button')}
            onSubmit={handleFormSubmit}
            type="submit"
          />
        </form>

        <Link href={ROUTES.LOGIN}>
          <a>{t('auth:register.already_account')}</a>
        </Link>
        <GoogleAuthenticateButton
          value={t('auth:google_auth')}
          onClick={googleAuthenticate}
        />
      </div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth', 'errors'])),
    },
  };
};

export default Register;

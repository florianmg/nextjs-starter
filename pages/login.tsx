import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Button,
  InputText,
  GoogleAuthenticateButton,
} from '../components/form';
import { Modal } from '../components/layout';
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

  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);

  const handleFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    emailLogin(formValues);
  };

  return (
    <main>
      <Modal
        isOpen={isResetPasswordModalOpen}
        closeModal={() => setIsResetPasswordModalOpen(false)}
      >
        <form>
          <InputText
            value={resetPasswordEmail}
            onChange={setResetPasswordEmail}
            required
            label={t('auth:email')}
          />
        </form>
      </Modal>

      <div>
        <h1>{t('auth:login.title')}</h1>
        {currentError && <p>{t(`errors:firebase_errors.${currentError}`)}</p>}
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
            required
            minLength={6}
            onChange={(value) =>
              setFormValues({ ...formValues, password: value })
            }
          />
          <Button
            value={t('auth:login.button')}
            onSubmit={handleFormSubmit}
            type="submit"
          />
        </form>
        <Link href={ROUTES.REGISTER}>
          <a>{t('auth:login.no_account')}</a>
        </Link>
        <GoogleAuthenticateButton
          value={t('auth:google_auth')}
          onClick={googleAuthenticate}
        />
        <p onClick={() => setIsResetPasswordModalOpen(true)}>
          Mot de passe oublié ?
        </p>
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

export default Login;

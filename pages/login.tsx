import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Button,
  InputText,
  GoogleAuthenticateButton,
  ErrorMessage,
} from '../components/form';
import { Modal } from '../components/layout';
import useAuth from '../hooks/useAuth';
import { ROUTES } from '../constants';
import Loader from '../components/loader';

const Login = () => {
  const { t } = useTranslation();
  const {
    googleAuthenticate,
    emailLogin,
    currentError,
    sendNewPasswordRequest,
  } = useAuth({
    secure: false,
  });

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [resetPasswordEmailSended, setResetPasswordEmailSended] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    emailLogin(formValues);
  };

  const handleResetPasswordFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { success } = await sendNewPasswordRequest(resetPasswordEmail);
    if (success) {
      setResetPasswordEmailSended(true);
    }
  };

  return (
    <main>
      <Modal
        isOpen={isResetPasswordModalOpen}
        closeModal={() => setIsResetPasswordModalOpen(false)}
      >
        {resetPasswordEmailSended ? (
          <p>
            {t('auth:reset_password_success', { email: resetPasswordEmail })}
          </p>
        ) : (
          <>
            <ErrorMessage errorCode={currentError} />
            <form onSubmit={handleResetPasswordFormSubmit}>
              <InputText
                value={resetPasswordEmail}
                onChange={setResetPasswordEmail}
                required
                label={t('auth:email')}
              />
              <Button
                type="submit"
                onSubmit={handleResetPasswordFormSubmit}
                value={t('auth:reset_passord')}
              />
            </form>
          </>
        )}
      </Modal>

      <div>
        <h1>{t('auth:login.title')}</h1>
        {isLoading && !currentError && <Loader />}
        <form onSubmit={handleFormSubmit}>
          <ErrorMessage errorCode={currentError} />

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

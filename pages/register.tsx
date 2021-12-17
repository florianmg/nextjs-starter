import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useAuth from '../hooks/useAuth';
import { Button, InputText } from '../components/form';
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
        <h1>{t('register:title')}</h1>
        {currentError && <p>{t(`errors:firebase_errors.${currentError}`)}</p>}
        <form onSubmit={handleFormSubmit}>
          <InputText
            label={t('register:form.email')}
            type="email"
            value={formValues.email}
            required
            onChange={(value) => setFormValues({ ...formValues, email: value })}
          />
          <InputText
            label={t('register:form.password')}
            value={formValues.password}
            type="password"
            minLength={6}
            required
            onChange={(value) =>
              setFormValues({ ...formValues, password: value })
            }
          />
          <Button
            value={t('register:form.button')}
            onSubmit={handleFormSubmit}
            type="submit"
          />
        </form>

        <Link href={ROUTES.LOGIN}>
          <a>{t('register:already_account')}</a>
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
      ...(await serverSideTranslations(locale, ['register', 'errors'])),
    },
  };
};

export default Register;

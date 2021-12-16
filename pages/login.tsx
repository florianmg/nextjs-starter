import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Button, InputText } from '../components/form';
import useAuth from '../hooks/useAuth';
import { CONSTANTS } from '../constants';

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
        <h1>{t('login_page.title')}</h1>
        <h1>{currentError}</h1>
        <form onSubmit={handleFormSubmit}>
          <InputText
            label={t('login_page.label_email')}
            type="email"
            value={formValues.email}
            required
            onChange={(value) => setFormValues({ ...formValues, email: value })}
          />
          <InputText
            label={t('login_page.label_password')}
            value={formValues.password}
            type="password"
            required
            minLength={6}
            onChange={(value) =>
              setFormValues({ ...formValues, password: value })
            }
          />
          <Button
            value={t('login_page.btn_email_connect')}
            onSubmit={handleFormSubmit}
            type="submit"
          />
        </form>
        <Link href={CONSTANTS.PAGES.REGISTER.SLUG}>
          <a>{t('login_page.no_account')}</a>
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

export default Login;

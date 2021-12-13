import { useState } from 'react';
import Link from 'next/link';

import { useTranslation } from 'react-i18next';

import { Button, InputText } from '../components/form';

import { CONSTANTS } from '../constants';

const Register = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    handleEmailRegister();
  };

  const handleEmailRegister = (): void => {
    console.log('> handleEmailRegister ', formValues);
  };

  const handleGoogleRegister = () => {
    console.log('Google regster !');
  };

  return (
    <main>
      <div>
        <h1>{t('register_page.title')}</h1>
        <form onSubmitCapture={handleFormSubmit}>
          <InputText
            label={t('register_page.label_email')}
            type="email"
            value={formValues.email}
            required
            onChange={(value) => setFormValues({ ...formValues, email: value })}
          />
          <InputText
            label={t('register_page.label_password')}
            value={formValues.password}
            type="password"
            onChange={(value) =>
              setFormValues({ ...formValues, password: value })
            }
          />
          <Button
            value={t('register_page.btn_email_register')}
            onSubmit={handleFormSubmit}
            type="submit"
          />
        </form>

        <Link href={CONSTANTS.PAGES.LOGIN.SLUG}>
          <a>{t('register_page.already_account')}</a>
        </Link>
        <Button
          type="button"
          onClick={handleGoogleRegister}
          value={t('register_page.btn_gmail_register')}
        />
      </div>
    </main>
  );
};

export default Register;

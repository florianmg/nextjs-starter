import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/useAuth';
import { Button, InputText } from '../components/form';
import { CONSTANTS } from '../constants';

const Register = () => {
  const { t } = useTranslation();
  const { emailRegister, googleAuthenticate } = useAuth({ secure: false });
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
          onClick={googleAuthenticate}
          value={t('register_page.btn_gmail_register')}
        />
      </div>
    </main>
  );
};

export default Register;

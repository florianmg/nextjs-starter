import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, InputText } from '../components/form';

const Login = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    handleEmailLogin();
  };

  const handleEmailLogin = (): void => {
    console.log('> handleEmailLogin ', formValues);
  };

  const handleGoogleLogin = () => {
    console.log('Google login !');
  };

  return (
    <main>
      <div>
        <h1>{t('login_page.title_login')}</h1>
        <form onSubmitCapture={handleFormSubmit}>
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

        <Button
          type="button"
          onClick={handleGoogleLogin}
          value={t('login_page.btn_gmail_connect')}
        />
      </div>
    </main>
  );
};

export default Login;

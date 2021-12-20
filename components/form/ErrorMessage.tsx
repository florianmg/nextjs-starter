import { useTranslation } from 'next-i18next';

interface IErrorMessageProps {
  errorCode: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ errorCode }) => {
  const { t } = useTranslation();

  if (!errorCode) return <></>;
  return <p>{t(`errors:firebase_errors.${errorCode}`)}</p>;
};

export default ErrorMessage;

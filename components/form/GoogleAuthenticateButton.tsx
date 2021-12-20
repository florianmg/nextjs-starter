import styles from './Inputs.module.scss';

interface IGoogleAuthenticateButtonProps {
  onClick: () => void;
  value: string;
}

const GoogleAuthenticateButton: React.FC<IGoogleAuthenticateButtonProps> = ({
  onClick,
  value,
}) => (
  <div className={styles['google-auth']} role="button" onClick={onClick}>
    <span className={styles['google-auth__icon']} />
    <span>{value}</span>
  </div>
);

export default GoogleAuthenticateButton;

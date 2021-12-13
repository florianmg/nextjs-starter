import styles from './Inputs.module.scss';

interface IButton {
  value: string;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({ value, onPress }) => {
  return (
    <button className={styles.input} onClick={onPress}>
      {value}
    </button>
  );
};

export default Button;

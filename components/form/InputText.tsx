import styles from './Inputs.module.scss';

interface IInputText {
  type?: 'text' | 'password';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputText: React.FC<IInputText> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
};

export default InputText;

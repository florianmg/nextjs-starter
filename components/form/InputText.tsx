import { cleanLabel } from '../../lib/helpers';
import styles from './Inputs.module.scss';

interface IInputText {
  type?: 'text' | 'password' | 'email';
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  minLength?: number;
}

const InputText: React.FC<IInputText> = ({
  type = 'text',
  label,
  placeholder = '',
  value,
  onChange,
  required = false,
  minLength = 0,
}) => {
  return (
    <div>
      {label && <label htmlFor={cleanLabel(label)}>{label}</label>}
      <input
        minLength={minLength}
        id={label && cleanLabel(label)}
        required={required}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </div>
  );
};

export default InputText;

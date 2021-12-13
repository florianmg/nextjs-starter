import React from 'react';
import styles from './Inputs.module.scss';

interface IButton {
  value: string;
  onClick?: () => void;
  onSubmit?: (event: React.SyntheticEvent) => void;
  type?: 'submit' | 'button';
}

const Button: React.FC<IButton> = ({
  value,
  onClick,
  type = 'button',
  onSubmit,
}) => {
  return (
    <button
      type={type}
      className={styles.input}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;

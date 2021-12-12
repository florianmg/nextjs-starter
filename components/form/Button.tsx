interface IButton {
  value: string;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({ value, onPress }) => {
  return <button onClick={onPress}>{value}</button>;
};

export default Button;

interface ICheckbox {
  label?: string;
  isChecked: boolean;
  onChange: (newValue: boolean) => void;
  labelBefore?: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({
  label,
  isChecked,
  onChange,
  labelBefore = false,
}) => {
  if (label) {
    return (
      <label htmlFor={label}>
        {labelBefore && label}
        <input
          id={label}
          type="checkbox"
          checked={isChecked}
          onChange={() => onChange(!isChecked)}
        />
        {!labelBefore && label}
      </label>
    );
  }
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => onChange(!isChecked)}
    />
  );
};

export default Checkbox;

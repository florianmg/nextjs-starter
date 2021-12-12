import { useState } from 'react';

interface ISelect {
  options: { value: string; content: string }[];
  onChange: (newValue: string) => void;
}

const Select: React.FC<ISelect> = ({ options, onChange }) => {
  const [selected, setSelected] = useState(options[0].value);

  const handleUpdateOptions = (selectedOption: string) => {
    setSelected(selectedOption);
    onChange(selectedOption);
  };
  return (
    <select
      value={selected}
      onChangeCapture={(event) =>
        handleUpdateOptions(event?.currentTarget.value)
      }
    >
      {options.map(({ value, content }) => (
        <option key={value} value={value}>
          {content}
        </option>
      ))}
    </select>
  );
};

export default Select;

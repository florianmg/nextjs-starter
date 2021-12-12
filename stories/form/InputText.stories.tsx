import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from '../../components/form';

export default {
  title: 'Form/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

export const Default: ComponentStory<typeof InputText> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputText value={inputValue} onChange={(value) => setInputValue(value)} />
  );
};

export const Password: ComponentStory<typeof InputText> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputText
      type="password"
      value={inputValue}
      onChange={(value) => setInputValue(value)}
    />
  );
};

export const WithPlaceholder: ComponentStory<typeof InputText> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputText
      placeholder="Écrir ici ..."
      value={inputValue}
      onChange={(value) => setInputValue(value)}
    />
  );
};

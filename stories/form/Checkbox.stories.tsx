import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../../components/form';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Defaut: ComponentStory<typeof Checkbox> = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <Checkbox
      isChecked={checkboxValue}
      onChange={(newValue) => setCheckboxValue(newValue)}
    />
  );
};

export const WithLabel: ComponentStory<typeof Checkbox> = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <Checkbox
      label="Check me !"
      isChecked={checkboxValue}
      onChange={(newValue) => setCheckboxValue(newValue)}
    />
  );
};

export const WithLabelBefore: ComponentStory<typeof Checkbox> = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <Checkbox
      label="Check me !"
      isChecked={checkboxValue}
      onChange={(newValue) => setCheckboxValue(newValue)}
      labelBefore
    />
  );
};

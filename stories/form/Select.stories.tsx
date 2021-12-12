import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '../../components/form';

export default {
  title: 'Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = () => {
  return (
    <Select
      onChange={(newValue) => console.log('changed value => ', newValue)}
      options={[
        {
          value: 'option_1',
          content: 'Option 1',
        },
        {
          value: 'option_2',
          content: 'Option 2',
        },
        {
          value: 'option_3',
          content: 'Option 3',
        },
      ]}
    />
  );
};

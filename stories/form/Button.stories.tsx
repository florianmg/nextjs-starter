import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/form';

export default {
  title: 'Form/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  const handlePress = () => console.log('button pressed');
  return <Button value="Press me" onPress={handlePress} />;
};

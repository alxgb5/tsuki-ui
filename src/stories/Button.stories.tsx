import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from '../components';
import { ButtonProps } from '../components/Button';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
};
export default meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Default', color: 'default' };

export const Primary = Template.bind({});
Primary.args = { text: 'Primary', color: 'primary' };
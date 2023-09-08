import React from 'react';
import { Story, Meta } from '@storybook/react';
import AddItems from './additeam.component';

export default {
  title: 'Admin/AddItem ',
  component: AddItems,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story = (args) => <AddItems {...args} />;

export const Default = Template.bind({});
Default.args = {};

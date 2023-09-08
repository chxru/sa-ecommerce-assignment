// src/stories/ShoppingCart.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import ShoppingCart, { ShoppingCartProps } from './shoppingcart.component';

// Define the arguments and their types
interface ShoppingCartStoryArgs {
  subtotal: number;
  taxes: number;
  shipping: number;
  total: number;
}

const ShoppingCartTemplate: Story<ShoppingCartStoryArgs> = (args) => (
  <ShoppingCart {...args} />
);

export default {
  title: 'Products/ShoppingCart',
  component: ShoppingCart,
  argTypes: {
    subtotal: { control: 'number' },
    taxes: { control: 'number' },
    shipping: { control: 'number' },
    total: { control: 'number' },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

} as Meta;

// Create a Default story with default values for arguments
export const Default = ShoppingCartTemplate.bind({});
Default.args = {
  subtotal: 19.99,
  taxes: 1.99,
  shipping: 0.0,
  total: 21.98,
};

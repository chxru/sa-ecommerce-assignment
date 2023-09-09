import React from 'react';
import { Story, Meta } from '@storybook/react';
import Invoice, { InvoiceProps } from './invoice.component'; 

export default {
  title: 'Products/Invoice',
  component: Invoice,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

} as Meta;

const Template: Story<InvoiceProps> = (args) => <Invoice {...args} />;

export const Default = Template.bind({});
Default.args = {
  invoiceNumber: 'INV-001',
  invoiceDate: '2023-09-08',
  dueDate: '2023-09-22',
  billTo: {
    name: 'John Doe',
    address: '123 Main Street, City, Country',
  },
  items: [
    {
      name: 'Item 1',
      quantity: 2,
      rate: 25.99,
    },
    {
      name: 'Item 2',
      quantity: 3,
      rate: 19.99,
    },
  ],
  subtotal: 123.94,
  total: 145.93,
  tax: 21.99,
  
};



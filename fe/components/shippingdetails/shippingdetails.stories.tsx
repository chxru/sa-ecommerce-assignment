import React from "react";
import { Story, Meta } from "@storybook/react";
import ShippingDetails from "./shippingdetails.component";

export default {
  title: "Products/ShippingDetails",
  component: ShippingDetails,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story = (args) => <ShippingDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};

// stories/CheckoutSummary.stories.tsx
import React from "react";
import { action } from "@storybook/addon-actions";
import CheckoutSummary from "./checkout.component";

export default {
  title: "Products/CheckoutSummary",
  component: CheckoutSummary,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const cartItems = [
  { id: 1, name: 'Product A', price: 19.99, quantity: 2 ,img:"https://www.nanotek.lk/uploads/product/2071-20230606093642-131a7a_27c314b0e76c41aea7eaa39de90eeb60~mv2.png" },
  { id: 2, name: 'Product B', price: 29.99, quantity: 1 ,img:"https://www.nanotek.lk/uploads/product/2071-20230606093642-131a7a_27c314b0e76c41aea7eaa39de90eeb60~mv2.png"},
];

export const Default = () => (
  <CheckoutSummary
    cart={cartItems}
    onQuantityChange={action("Quantity Changed")}
  />
);

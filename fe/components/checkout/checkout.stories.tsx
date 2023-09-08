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
  { id: 1, name: "Product A", price: 19.99, quantity: 2 },
  { id: 2, name: "Product B", price: 29.99, quantity: 1 },
];

export const Default = () => (
  <CheckoutSummary
    cart={cartItems}
    onQuantityChange={action("Quantity Changed")}
  />
);

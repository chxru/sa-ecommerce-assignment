import type { Meta, StoryObj } from "@storybook/react";

import ProductBar from "./productcard.component";

const meta = {
  title: "Products/Card",
  component: ProductBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProductBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

  args: {
    productImage: "https://www.nanotek.lk/uploads/product/2071-20230606093642-131a7a_27c314b0e76c41aea7eaa39de90eeb60~mv2.png",
    deviceName: "HeadSet",
    price: 100,
  },  
};
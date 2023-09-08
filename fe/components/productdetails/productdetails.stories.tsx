// ProductDetails.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import ProductDetails from "./productdetails.component";

export default {
  title: "Products/ProductDetails",
  component: ProductDetails,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

const Template: Story = (args) => (
  <ProductDetails
    brandName={""}
    name={""}
    description={""}
    price={""}
    imageSrc={""}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  brandName: "OMEN",
  name: "OMEN 17 LAPTOP",
  description:
    "Desktop-Caliber Gaming In a Laptop with 13th Gen Intel® Core™ Processors. Gaming Happens with Intel®1",
  price: "$58.00",
  imageSrc:
    "https://www.nanotek.lk/uploads/product/2071-20230606093642-131a7a_27c314b0e76c41aea7eaa39de90eeb60~mv2.png",
};

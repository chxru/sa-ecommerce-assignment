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
    productImage:
      "https://www.sony-asia.com/image/b3cf69690ec0d3f5ebfdad6463937ea7?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
    deviceName: "HeadSet",
    price: 100,
  },
};

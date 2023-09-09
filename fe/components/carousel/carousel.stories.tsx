import type { Meta, StoryObj } from "@storybook/react";

import ProductCarousel from "./product.carousel";

const meta = {
  title: "Products/ProductCarousel",
  component: ProductCarousel,
} satisfies Meta<typeof ProductCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const cards = [
  {
    id: 1,
    name: "Card 1",
    description: "Description for Card 1",
    price: 50.0,
    photoUrl:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Card 2",
    description: "Description for Card 2",
    price: 50.0,
    photoUrl:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Card 3",
    description: "Description for Card 3",
    photoUrl:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 50.0,
  },
];

export const Default: Story = {
  args: {
    cards,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "./searchbar.component";

const meta = {
  title: "Navigation/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

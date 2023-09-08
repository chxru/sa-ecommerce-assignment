import type { Meta, StoryObj } from "@storybook/react";

import AddItems from "./additeam.component";

const meta = {
  title: "Admin/AddItem ",
  component: AddItems,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AddItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

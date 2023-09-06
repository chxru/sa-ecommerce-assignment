import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "./sidebar.component";

const meta = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    isLoading: false,
    data: [
      { name: "CPU", path: "/cpu" },
      { name: "GPU", path: "/gpu" },
      { name: "Headphones", path: "/headphones" },
    ],
  },
};

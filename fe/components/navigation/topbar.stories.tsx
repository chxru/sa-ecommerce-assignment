import type { Meta, StoryObj } from "@storybook/react";

import Topbar from "./topbar.component";

const meta = {
  title: "Navigation/Topbar",
  component: Topbar,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof Topbar>;

export const Unauthenticated: Story = {
  args: {
    username: undefined,
    onLogin: () => {},
    onSignOut: () => {},
  },
};

export const Authenticated: Story = {
  args: {
    username: "John Doe",
    onLogin: () => {},
    onSignOut: () => {},
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import AuthBox from "./auth.component";

const meta = {
  title: "Authentication/AuthBox",
  component: AuthBox,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    initialInstance: "login",
    handleTokenChange(token) {
      console.log(token);
    },
    handleUserChange(user) {
      console.log(user);
    },
  },
};

export const Register: Story = {
  args: {
    initialInstance: "register",
    handleTokenChange(token) {
      console.log(token);
    },
    handleUserChange(user) {
      console.log(user);
    },
  },
};

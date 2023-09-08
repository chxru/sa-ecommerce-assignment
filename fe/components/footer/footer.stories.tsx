// stories/Footer.stories.tsx
import React from "react";
import Footer from "./footer.component";

export default {
  title: "Footer/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = () => <Footer />;

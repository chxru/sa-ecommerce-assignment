// stories/ContactUs.stories.tsx
import React from "react";
import ContactUs from "./contentus.component";

export default {
  title: "ContactUs/ContactUs",
  component: ContactUs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = () => <ContactUs />;

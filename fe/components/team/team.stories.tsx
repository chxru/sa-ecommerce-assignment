// Team.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Team from './team.component';

export default {
  title: 'Team',
  component: Team,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

const Template: Story = (args) => <Team teamMembers={[]} description={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  
  description:
    "Meet the talented individuals behind our e-commerce web application development team. With their skills and dedication, we create outstanding online shopping experiences for our customers",
  teamMembers: [
    {
      name: 'charuka ',
      role: 'Backend developer',
      description:
        'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
      imageUrl: 'https://media.licdn.com/dms/image/C5103AQGFz9ZikpKFOg/profile-displayphoto-shrink_800_800/0/1551182231562?e=1699488000&v=beta&t=JURFtGNPq3Bc4OF5np9IqB_z9Lz4a0tntgs9T5d55DM',
      socialLinks: {
        github: 'https://github.com/alperkamu',
        twitter: 'https://twitter.com/alperkamu',
        linkedin: 'https://www.linkedin.com/in/charukahs/',
      },
    },
    {
      name: 'Sahan',
      role: 'UI Developer',
      description:
        'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
      imageUrl: 'https://media.licdn.com/dms/image/D5603AQE--I2oRXzKSw/profile-displayphoto-shrink_800_800/0/1677679415528?e=1699488000&v=beta&t=NYTKP3YDoB4_OM_3k3VKpuPAh8r1z3U2dzddH9pK-7Q',
      socialLinks: {
        github: 'https://github.com/holdencaulfield',
        twitter: 'https://twitter.com/holdencaulfield',
        linkedin: 'https://linkedin.com/in/holdencaulfield',
      },
    },
    {
      name: 'Atticus Finch',
      role: 'UI Developer',
      description:
        'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
      imageUrl: 'https://media.licdn.com/dms/image/C5603AQF7Kd55wXUD4w/profile-displayphoto-shrink_800_800/0/1642053912508?e=1699488000&v=beta&t=H0u82y-_Vgy6qmsV8xup8V_AiZpsp7NTtOjSSJl8acQ',
      socialLinks: {
        github: 'https://github.com/atticusfinch',
        twitter: 'https://twitter.com/atticusfinch',
        linkedin: 'https://linkedin.com/in/wickx',
      },
    },
  ],
};

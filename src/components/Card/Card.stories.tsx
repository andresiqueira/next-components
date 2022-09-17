import React from 'react';
import { mock } from "./mock"

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#111' },
      ],
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  title: mock.title,
  subtitle: mock.subtitle,
  text: mock.text,
  image: mock.image,
};

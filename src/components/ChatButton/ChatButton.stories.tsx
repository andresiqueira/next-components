import React from 'react';
import { mock } from "./mock"

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChatButton } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ChatButton',
  component: ChatButton,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#111' },
      ],
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ChatButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChatButton> = (args) =>
  <div className='h-[125rem]'>
    <ChatButton {...args} />
  </div>;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  phone: '5598987309577',
  message: 'Oi, estou vindo do site'
};

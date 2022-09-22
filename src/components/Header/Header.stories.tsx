import React from 'react';
import { mockRoutes } from "./mock"

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';
import { mock } from '../Hero/mock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#111' },
      ],
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => 
<div className='h-[125rem]'>
  <Header {...args} />
</div>;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  routes: mockRoutes
};

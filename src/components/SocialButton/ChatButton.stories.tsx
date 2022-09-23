import React from 'react';
import { FacebookLogo } from "phosphor-react"

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SocialButton } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SocialButton',
  component: SocialButton,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#111' },
      ],
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SocialButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialButton> = (args) => 
<SocialButton {...args} >
  <FacebookLogo size={44}/>
</SocialButton>;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  link: 'https://www.facebook.com'
};

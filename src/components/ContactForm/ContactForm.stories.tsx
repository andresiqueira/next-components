import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactForm} from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#111' },
      ],
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ContactForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm />

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};

import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IkBaseLink from './IKBaseLink.vue'
import { TBaseLinkProps } from '@/components/IKBaseLink/types'

type Story = StoryObj<typeof IkBaseLink>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/BaseLink',
  component: IkBaseLink,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean' }, defaultValue: false },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    disabled: false,
    onClick: fn(),
  },
  render: (args: TBaseLinkProps) => ({
    components: { IKBaseLink: IkBaseLink },
    setup() {
      return { args }
    },
    template: `
      <IKBaseLink v-bind="args">
        Ссылка
      </IKBaseLink>
    `
  })
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Link: Story = {
  args: {
    rel: 'noindex nofollow',
    to: '/'
  }
};

export const LinkNoIndexNoFollow: Story = {
  args: {
    rel: 'noindex nofollow',
    to: '/'
  }
};



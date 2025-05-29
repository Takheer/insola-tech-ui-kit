import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IKButton from './index.vue'
import { TButtonProps } from '@/components/IKButton/types'
import { PhPlus } from '@phosphor-icons/vue'

type Story = StoryObj<typeof IKButton>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  components: { PhPlus },
  title: 'UI/Button',
  component: IKButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    variant: 'primary',
    size: 'md',
    onClick: fn(),
    fullWidth: false
  },
  render: (args: TButtonProps) => ({
    components: { IKButton, PhPlus },
    setup() {
      return { args }
    },
    template: `
      <IKButton v-bind="args" class="flex flex-row items-center gap-2">
        <PhPlus size="24" /> 
        Действие необратимого характера
      </IKButton>
    `
  })
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  }
};

export const LoadingPrimary: Story = {
  args: {
    loading: true,
    variant: 'primary',
  }
};

export const LoadingOutline: Story = {
  args: {
    loading: true,
    variant: 'outline',
  }
};



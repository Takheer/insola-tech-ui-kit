import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IKCheckbox from './index.vue'
import { TCheckboxProps } from '@/components/IKCheckbox/types'
import { PhPlus } from '@phosphor-icons/vue'
import { ref } from 'vue'

type Story = StoryObj<typeof IKCheckbox>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  components: { PhPlus },
  title: 'UI/Inputs/Checkbox',
  component: IKCheckbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    size: 'md',
    label: 'label',
  },
  render: (args: TCheckboxProps) => ({
    components: { IKCheckbox, PhPlus },
    setup() {
      const model = ref(false)
      return { args, model }
    },
    template: `
      <IKCheckbox
        v-model="model"
        v-bind="args"
      />
      value: {{ model }}
    `
  })
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};


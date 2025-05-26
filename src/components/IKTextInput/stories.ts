import {StoryObj} from "@storybook/vue3";
import IKTextInput from './index.vue'
import { TTextInputProps } from '@/components/IKTextInput/types'

type Story = StoryObj<typeof IKTextInput>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/Inputs/TextInput',
  component: IKTextInput,
  decorators: [() => ({ template: '<v-expansion-panels class="w-25"><story/></v-expansion-panels>' })],
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    dense: { control: { type: 'boolean' }, defaultValue: false },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: 'Text Input',
    disabled: false,
    dense: false,
  },
  render: (args: TTextInputProps) => ({
    components: { IKTextInput },
    setup() {
      return { args }
    },
    template: `
      <IKTextInput v-bind="args">
        Ссылка
      </IKTextInput>
    `
  })
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const InputError: Story = {
  args: {
    label: 'Text Input',
    error: true,
    errorMessage: 'Что-то пошло не так, хотя казалось бы',
  }
};



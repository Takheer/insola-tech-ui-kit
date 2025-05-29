import {StoryObj} from "@storybook/vue3";
import IKSelectInput from './index.vue'
import { TSelectInputProps } from './types'

type Story = StoryObj<typeof IKSelectInput>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/Inputs/SelectInput',
  component: IKSelectInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    dense: { control: { type: 'boolean' }, defaultValue: false },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: 'Select Input',
    placeholder: 'Select an option',
    options: [
      { value: 1, label: 'the quick' },
      { value: 2, label: 'brown fox' },
      { value: 3, label: 'jump over' },
      { value: 4, label: 'a lazy dog' },
    ],
    dense: false,
  },
  render: (args: TSelectInputProps) => ({
    components: { IKSelectInput },
    setup() {
      return { args }
    },
    template: `
      <IKSelectInput v-bind="args">
        Ссылка
      </IKSelectInput>
    `
  })
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};

export const InputError: Story = {
  args: {
    label: 'Text Input',
    error: true,
    errorMessage: 'Что-то пошло не так, хотя казалось бы',
  }
};



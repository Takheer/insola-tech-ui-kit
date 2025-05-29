import {StoryObj} from "@storybook/vue3";
import IKTextArea from './index.vue'
import { TTextAreaProps } from './types'

type Story = StoryObj<typeof IKTextArea>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/Inputs/TextArea',
  component: IKTextArea,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: 'Текстовое поле',
    placeholder: 'Сюда можно ввести текст'
  },
  render: (args: TTextAreaProps) => ({
    components: { IKTextArea },
    setup() {
      return { args }
    },
    template: `
      <IKTextArea v-bind="args">
        Ссылка
      </IKTextArea>
    `
  })
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};
export const InputError: Story = {
  args: {
    error: true,
    errorMessage: 'Всё не так и всё не то'
  }
};



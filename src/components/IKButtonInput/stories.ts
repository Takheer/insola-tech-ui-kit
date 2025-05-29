import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IKButtonInput from './index.vue'
import { TButtonProps } from '@/components/IKButton/types'
import { PhPlus } from '@phosphor-icons/vue'

type Story = StoryObj<typeof IKButtonInput>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  components: { PhPlus },
  title: 'UI/Inputs/ButtonInput',
  component: IKButtonInput,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: 'Кнопка в виде поля ввода',
    error: false,
    errorMessage: '',
    placeholder: 'Нажмите чтобы открыть модальное окно или выполнить какое-то действие',
    dense: false,
    inline: true,
    onClick: fn(),
  },
  render: (args: TButtonProps) => ({
    components: { IKButtonInput, PhPlus },
    setup() {
      return { args }
    },
    template: `
      <IKButtonInput v-bind="args">
        <PhPlus size="24" /> 
        Действие необратимого характера
      </IKButtonInput>
    `
  })
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Что-то пошло не так',
  }
};

export const Value: Story = {
  args: {
    modelValue: 'Есть контакт!'
  }
}
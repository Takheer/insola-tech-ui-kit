import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IKAutocomplete from './index.vue'
import { TAutocompleteProps } from '@/components/IKAutocomplete/types'
import { PhPlus } from '@phosphor-icons/vue'

type Story = StoryObj<typeof IKAutocomplete>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  components: { PhPlus },
  title: 'UI/Inputs/Autocomplete',
  component: IKAutocomplete,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    options: [
      { value: 1, label: "The quick" },
      { value: 2, label: "brown fox" },
      { value: 3, label: "jumped over" },
      { value: 4, label: "the lazy" },
      { value: 5, label: "dog" },
    ],
    label: 'Кнопка в виде поля ввода',
    itemValue: 'value',
    itemLabel: 'label',
    error: false,
    errorMessage: '',
    placeholder: 'Начните вводить текст, чтобы отфильтровать варианты',
    dense: false,
    clearable: false,
    onClick: fn(),
  },
  render: (args: TAutocompleteProps) => ({
    components: { IKAutocomplete, PhPlus },
    setup() {
      return { args }
    },
    template: `
      <IKAutocomplete v-bind="args">
        <PhPlus size="24" /> 
        Действие необратимого характера
      </IKAutocomplete>
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
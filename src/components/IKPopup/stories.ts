import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IKPopup from './index.vue'
import { TPopupProps } from './types'

type Story = StoryObj<typeof IKPopup>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/Popup',
  component: IKPopup,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    placement: { control: 'select', options: ['top', 'bottom', 'left',  'right'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    text: '',
    size: 'md',
    placement: 'bottom',
    onClick: fn(),
  },
  render: (args: TPopupProps) => ({
    components: { IKPopup },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-row justify-center p-24">
        <IKPopup v-bind="args" @update:model-value="args.modelValue = false" class="flex flex-row items-center gap-2">
          <div class="flex flex-col p-4 bg-white items-center justify-start">
            <h1>Действие необратимого характера</h1>
          </div>
          <template #content>
            <div class="flex flex-col gap-1">
              <p>Вы действительно хотите выполнить Действие необратимого характера? </p>
              <p>Отменить это действие будет невозможно</p>
            </div>
          </template>
        </IKPopup>
      </div>
    `
  })
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};

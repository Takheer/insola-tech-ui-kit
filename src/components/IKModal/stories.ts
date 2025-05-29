import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IKModal from './index.vue'
import IKButton from '@/components/IKButton/index.vue'
import { TModalProps } from '@/components/IKModal/types'
import { PhPlus } from '@phosphor-icons/vue'

type Story = StoryObj<typeof IKModal>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  components: { PhPlus },
  title: 'UI/Modal',
  component: IKModal,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    modelValue: false,
    persistent: false,
    fullscreen: false,
    onClick: fn(),
  },
  render: (args: TModalProps) => ({
    components: { IKModal, IKButton, PhPlus },
    setup() {
      return { args }
    },
    template: `
      <IKButton @click="args.modelValue = true">Открыть модальник</IKButton>
      <IKModal v-bind="args" @update:model-value="args.modelValue = false" class="flex flex-row items-center gap-2">
        <div class="flex flex-col p-4 bg-white items-center justify-start">
          <h1>Действие необратимого характера</h1>
          <PhPlus size="24" />
          <p>Вы действительно хотите выполнить Действие необратимого характера? </p>
          <p>Отменить это действие будет невозможно</p>
        </div>
      </IKModal>
    `
  })
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};
export const Persistent: Story = {
  args: {
    persistent: true,
  }
};
export const FullScreen: Story = {
  args: {
    fullscreen: true,
  }
};

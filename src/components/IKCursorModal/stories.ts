import { fn } from '@storybook/test';

import {StoryObj} from "@storybook/vue3";
import IKCursorModal from './index.vue'
import { TModalProps } from '@/components/IKModal/types'
import { ref } from 'vue'

type Story = StoryObj<typeof IKCursorModal>;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/CursorModal',
  component: IKCursorModal,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  render: (args: TModalProps) => ({
    components: { IKCursorModal },
    setup() {
      const cursorModalRef = ref<HTMLElement>()
      return { args, cursorModalRef }
    },
    template: `
      <div class="w-full h-100 relative" @click="(e) => cursorModalRef.open(e)">Нажмите на любое место</div>
      <IKCursorModal v-bind="args" ref="cursorModalRef">
        <template #header>Модальник с-под курсора</template>
        <div class="flex flex-col p-4 bg-white items-center justify-start">
          <h1>Действие необратимого характера</h1>
          <p>Вы действительно хотите выполнить Действие необратимого характера? </p>
          <p>Отменить это действие будет невозможно</p>
        </div>
      </IKCursorModal>
    `
  })
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};
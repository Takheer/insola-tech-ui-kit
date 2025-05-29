import {StoryObj} from "@storybook/vue3";
import IKSwitch from './index.vue'
import { TSwitchProps } from './types'

type Story = StoryObj<typeof IKSwitch>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/Switch',
  component: IKSwitch,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    options: [
      { id: 1, value: 'the quick', selected: true },
      { id: 2, value: 'brown fox' },
      { id: 3, value: 'jump over' },
      { id: 4, value: 'a lazy dog' },
    ],
  },
  render: (args: TSwitchProps) => ({
    components: { IKSwitch },
    setup() {
      return { args }
    },
    template: `
      <IKSwitch v-bind="args">
        Ссылка
      </IKSwitch>
    `
  })
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};



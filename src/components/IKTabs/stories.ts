import {StoryObj} from "@storybook/vue3";
import IKTabs from './index.vue'
import { TTabsProps } from './types'

type Story = StoryObj<typeof IKTabs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI/Tabs',
  component: IKTabs,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    tabs: [
      { id: 1, label: 'the quick', selected: true },
      { id: 2, label: 'brown fox' },
      { id: 3, label: 'jump over' },
      { id: 4, label: 'a lazy dog' },
    ],
  },
  render: (args: TTabsProps) => ({
    components: { IKTabs },
    setup() {
      return { args }
    },
    template: `
      <IKTabs v-bind="args">
        Ссылка
      </IKTabs>
    `
  })
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {}
};



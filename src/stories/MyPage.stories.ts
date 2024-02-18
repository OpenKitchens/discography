import MyPage from "@pages/MyPage.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
  title: "MyPage",
  component: MyPage,
};

export const Default: Story = {
  render: () => ({
    components: { MyPage },
    template: "<MyPage label='ボタン' />",
  }),
};

export default meta;
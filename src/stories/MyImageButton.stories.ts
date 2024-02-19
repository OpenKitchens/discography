import ImageButton from "@atoms/ImageButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof ImageButton>;

const meta: Meta<typeof ImageButton> = {
  title: "ImageButton",
  component: ImageButton,
  render: (args) => ({
    components: { ImageButton },
    setup() {
      return { args };
    },
    template: "<ImageButton v-bind='args' />",
  }),
};

export const Message: Story = {
  args: {
    src: "/icons/message.svg",
  },
};

export const Bookmark: Story = {
  args: {
    src: "/icons/bookmark.svg",
  },
};

export const Search: Story = {
  args: {
    src: "/icons/search.svg",
  },
};

export default meta;

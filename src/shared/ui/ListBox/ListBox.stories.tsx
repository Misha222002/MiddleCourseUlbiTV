import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ListBox } from "./ListBox";

const meta = {
    title: "shared/ListBox",
    component: ListBox,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
const meta = {
    title: "shared/Select",
    component: Select,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый пункт" },
            { value: "121233", content: "Второй пункт" },
        ],
    },
};

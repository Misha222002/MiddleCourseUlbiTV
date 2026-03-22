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
    decorators: [
        (Story) => (
            <div style={{ padding: "100px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalBottomLeft: Story = {
    args: {
        direction: "bottom left",
        items: [
            { content: "safasdfasdfsadfsadf", value: "value1" },
            { content: "value2", value: "value2" },
            { content: "value3", value: "value2" },
            { content: "value4", value: "value4" },
        ],
    },
};

export const NormalBottomRight: Story = {
    args: {
        direction: "bottom right",
        items: [
            { content: "safasdfasdfsadfsadf", value: "value1" },
            { content: "value2", value: "value2" },
            { content: "value3", value: "value2" },
            { content: "value4", value: "value4" },
        ],
    },
};
export const NormalTopLeft: Story = {
    args: {
        direction: "top left",
        items: [
            { content: "safasdfasdfsadfsadf", value: "value1" },
            { content: "value2", value: "value2" },
            { content: "value3", value: "value2" },
            { content: "value4", value: "value4" },
        ],
    },
};
export const NormalTopRight: Story = {
    args: {
        direction: "top right",
        items: [
            { content: "safasdfasdfsadfsadf", value: "value1" },
            { content: "value2", value: "value2" },
            { content: "value3", value: "value2" },
            { content: "value4", value: "value4" },
        ],
    },
};

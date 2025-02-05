import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "TEXT",
    },
};

export const Clear: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.OUTLINE,
    },
};
export const OutlineDark: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

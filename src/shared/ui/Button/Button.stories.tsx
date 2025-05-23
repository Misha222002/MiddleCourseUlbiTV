import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonSize, ButtonTheme } from "./Button";
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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.OUTLINE,
    },
};
export const OutlineDark: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const BackgroundTheme: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};

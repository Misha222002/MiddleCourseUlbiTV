import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Text",
    component: Text,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Title",
        text: "Some text",
    },
};

export const Error: Story = {
    args: {
        title: "Title",
        text: "Some text",
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: "Title",
    },
};

export const onlyText: Story = {
    args: {
        text: "Some text",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Title",
        text: "Some text",
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const onlyTitleDark: Story = {
    args: {
        title: "Title",
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const onlyTextDark: Story = {
    args: {
        text: "Some text",
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

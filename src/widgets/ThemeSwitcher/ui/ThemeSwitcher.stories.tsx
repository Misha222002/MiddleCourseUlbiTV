import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

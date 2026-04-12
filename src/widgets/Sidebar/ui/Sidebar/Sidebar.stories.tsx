import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook";
import { Sidebar } from "./Sidebar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/lib/context/ThemeContext";

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ user: { authData: {} } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <StoreDecorator state={{ user: { authData: {} } }}>
                    <Story />
                </StoreDecorator>
            </ThemeDecorator>
        ),
    ],
};

export const NoAuth: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <StoreDecorator state={{ user: {} }}>
                    <Story />
                </StoreDecorator>
            </ThemeDecorator>
        ),
    ],
};

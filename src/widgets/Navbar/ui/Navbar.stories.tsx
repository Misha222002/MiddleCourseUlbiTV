import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/lib/context/ThemeContext";

const meta = {
    title: "widgets/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{}}>
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
                <StoreDecorator state={{}}>
                    <Story />
                </StoreDecorator>
            </ThemeDecorator>
        ),
    ],
};

export const AuthNavbar: Story = {
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

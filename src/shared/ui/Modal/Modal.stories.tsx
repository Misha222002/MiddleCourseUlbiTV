import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: "dsf gdfs gds dsfdsg sdfg ds",
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: "dsf gdfs gds dsfdsg sdfg ds",
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

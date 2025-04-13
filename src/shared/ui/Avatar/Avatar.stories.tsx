import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Avatar } from "./Avatar";
import AvatarImg from "../../assets/tests/storybook.jpg";
const meta = {
    title: "shared/Avatar",
    component: Avatar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};

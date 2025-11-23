import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard";

const meta = {
    title: "entity/CommentCard",
    component: CommentCard,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: "1",
            text: "hello world",
            user: { id: "1", username: "Misha" },
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

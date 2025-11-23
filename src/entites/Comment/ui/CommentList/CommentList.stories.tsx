import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "entity/Comment/CommentList",
    component: CommentList,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: "1",
                text: "hello world",
                user: { id: "1", username: "Misha" },
            },
            {
                id: "2",
                text: "hello world2",
                user: { id: "2", username: "Misha2" },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

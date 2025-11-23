import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { action } from "@storybook/addon-actions";

const meta = {
    title: "features/AddCommentForm",
    component: AddCommentForm,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { onSendComment: action("onSendComment") },
    decorators: [
        (Story) => (
            <StoreDecorator state={{}}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator
                state={{
                    loginForm: {
                        username: "123",
                        password: "123",
                        isLoading: false,
                    },
                }}
                asyncReducers={{ loginForm: loginReducer }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator
                state={{
                    loginForm: {
                        username: "123",
                        password: "123",
                        error: "Error",
                    },
                }}
                asyncReducers={{ loginForm: loginReducer }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator
                state={{
                    loginForm: {
                        username: "123",
                        password: "123",
                        isLoading: true,
                    },
                }}
                asyncReducers={{ loginForm: loginReducer }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

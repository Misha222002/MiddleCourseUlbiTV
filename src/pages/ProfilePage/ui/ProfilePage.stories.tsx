import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AvatarImg from "shared/assets/tests/storybook.jpg";
import { Country } from "entites/Country";
import { Currency } from "entites/Currency";

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator
                state={{
                    profile: {
                        data: {
                            avatar: AvatarImg,
                            age: 22,
                            city: "SDFSD",
                            country: Country?.Armenia,
                            currency: Currency.EUR,
                            first: "Misha",
                            lastname: "Ivanov",
                            username: "mvivanov",
                        },
                    },
                }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator
                state={{
                    profile: {
                        data: {
                            avatar: AvatarImg,
                            age: 22,
                            city: "SDFSD",
                            country: Country?.Armenia,
                            currency: Currency.EUR,
                            first: "Misha",
                            lastname: "Ivanov",
                            username: "mvivanov",
                        },
                    },
                }}
            >
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};

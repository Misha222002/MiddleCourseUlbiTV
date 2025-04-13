import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import AvatarImg from "shared/assets/tests/storybook.jpg";
import { Country } from "entites/Country";
import { Currency } from "entites/Currency";

const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
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
};

export const WithError: Story = {
    args: { error: "error" },
};

export const Loading: Story = {
    args: { isLoading: true },
};

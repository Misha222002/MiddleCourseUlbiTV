/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";

const meta = {
    title: "shared/Flex",
    component: Flex,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: "column",
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const Gap4: Story = {
    args: {
        gap: "4",
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const Gap8: Story = {
    args: {
        gap: "8",
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};
export const Gap16: Story = {
    args: {
        gap: "16",
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};
export const Gap32: Story = {
    args: {
        gap: "32",
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

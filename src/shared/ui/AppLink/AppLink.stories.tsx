import type { Meta, StoryObj } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        to: "/",
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Test",
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Inverted: Story = {
    args: {
        children: "Test",
        theme: AppLinkTheme.INVERTED,
    },
};

// export const Dark: Story = {
//     args: {},
//     decorators: [
//         (Story) => (
//             <ThemeDecorator theme={Theme.DARK}>
//                 <Story />
//             </ThemeDecorator>
//         ),
//     ],
// };

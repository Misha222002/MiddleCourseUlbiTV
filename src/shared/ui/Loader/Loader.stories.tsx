import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Loader",
    component: Loader,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Inverted: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
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

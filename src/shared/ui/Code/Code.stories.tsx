import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

const meta = {
    title: "shared/Code",
    component: Code,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        text: `import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

const meta = {
    title: "shared/Text",
    component: Code,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>;
`,
    },
};

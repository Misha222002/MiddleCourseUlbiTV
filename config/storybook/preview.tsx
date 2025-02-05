import type { Preview } from "@storybook/react";
import React from "react";
import "../../src/app/styles/index.scss";
import { Theme } from "../../src/app/providers/ThemeProvider";

import {
    RouterDecorator,
    ThemeDecorator,
} from "../../src/shared/config/storybook/index";
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <RouterDecorator>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story />
                </ThemeDecorator>
            </RouterDecorator>
        ),
    ],
};

export default preview;

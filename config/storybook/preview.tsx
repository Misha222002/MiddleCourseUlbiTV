import type { Preview } from "@storybook/react";
import "../../src/app/styles/index.scss";
import { initialize, mswLoader } from "msw-storybook-addon";
import {
    RouterDecorator,
    ThemeDecorator,
    SuspenseDecorator,
} from "../../src/shared/config/storybook/index";

initialize();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    loaders: [mswLoader],
    decorators: [
        (Story) => (
            <RouterDecorator>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <SuspenseDecorator>
                        <Story />
                    </SuspenseDecorator>
                </ThemeDecorator>
            </RouterDecorator>
        ),
    ],
};

export default preview;

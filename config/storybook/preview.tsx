import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import {
    RouterDecorator,
    SuspenseDecorator,
} from "../../src/shared/config/storybook/index";
import { Theme } from "../../src/shared/lib/context/ThemeContext";

import "../../src/app/styles/index.scss";

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
        withThemeByClassName({
            themes: {
                light: `app ${Theme.LIGHT}`,
                dark: `app ${Theme.DARK}`,
                orange: `app ${Theme.ORANGE}`,
            },
            defaultTheme: "light",
            // Provider: ThemeProvider,
            // GlobalStyles: CssBaseline, // Uncomment if you have global styles
        }),
        (Story) => (
            <RouterDecorator>
                <SuspenseDecorator>
                    <Story />
                </SuspenseDecorator>
            </RouterDecorator>
        ),
    ],
};

export default preview;

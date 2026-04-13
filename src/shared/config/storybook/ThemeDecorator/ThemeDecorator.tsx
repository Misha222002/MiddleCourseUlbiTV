import React, { FC } from "react";

// eslint-disable-next-line custom-plugin/layer-imports
import "@/app/styles/index.scss";
// eslint-disable-next-line custom-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/lib/context/ThemeContext";

interface Props {
    children?: React.ReactNode;
    theme: Theme;
}
export const ThemeDecorator: FC<Props> = ({ children, theme }) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>{children}</div>
    </ThemeProvider>
);

import React, { FC } from "react";
import "app/styles/index.scss";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

interface Props {
    children?: React.ReactNode;
    theme: Theme;
}
export const ThemeDecorator: FC<Props> = ({ children, theme }) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>{children}</div>
    </ThemeProvider>
);

import { FC, ReactNode, useEffect, useMemo, useState } from "react";

import { useJsonSettings } from "@/entites/User";
import { Theme, ThemeContext } from "@/shared/lib/context/ThemeContext";

export interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;

    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    useEffect(() => {
        setTheme(defaultTheme);
    }, [defaultTheme]);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    );

    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

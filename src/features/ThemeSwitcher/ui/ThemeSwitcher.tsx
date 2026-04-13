import { memo } from "react";

import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Theme } from "@/shared/lib/context/ThemeContext";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button, ButtonTheme } from "@/shared/ui";

import style from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(style.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});

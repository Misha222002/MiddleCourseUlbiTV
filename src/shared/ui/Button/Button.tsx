import { classNames } from "shared/lib/classNames/classNames";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(style.button, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

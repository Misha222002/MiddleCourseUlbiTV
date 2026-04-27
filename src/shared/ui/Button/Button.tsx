import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import style from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_RED = "outlineRed",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "sizeM",
    L = "sizeL",
    XL = "sizeXl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo(
    forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
        const {
            className,
            children,
            theme = ButtonTheme.OUTLINE,
            square,
            size = ButtonSize.M,
            disabled,
            ...otherProps
        } = props;
        return (
            <button
                ref={ref}
                className={classNames(
                    style.button,
                    { [style.square]: square, [style.disabled]: disabled },
                    [className, style[theme], style[size]],
                )}
                {...otherProps}
            >
                {children}
            </button>
        );
    }),
);

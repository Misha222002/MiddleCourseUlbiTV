import { classNames } from "shared/lib/classNames/classNames";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
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

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;
    return (
        <button
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
};

import { classNames } from "shared/lib/classNames/classNames";
import style from "./Text.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;
    return (
        <div
            className={classNames(style.text, {}, [
                className,
                style[theme],
                style[align],
            ])}
        >
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
});

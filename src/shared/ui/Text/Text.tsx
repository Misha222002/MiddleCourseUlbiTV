import { classNames, Mods } from "shared/lib/classNames/classNames";
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

export enum TextSize {
    M = "sizeM",
    L = "sizeL",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods: Mods = {
        [style[theme]]: true,
        [style[align]]: true,
        [style[size]]: true,
    };

    return (
        <div className={classNames(style.Text, mods, [className])}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
});

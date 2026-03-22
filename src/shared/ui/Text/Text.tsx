import { classNames, Mods } from "shared/lib/classNames/classNames";
import style from "./Text.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

export enum TextTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
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
    S = "sizeS",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: "h3",
    [TextSize.M]: "h2",
    [TextSize.L]: "h1",
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [style[theme]]: true,
        [style[align]]: true,
        [style[size]]: true,
    };

    return (
        <div className={classNames(style.Text, mods, [className])}>
            {title && <HeaderTag className={style.title}>{title}</HeaderTag>}
            {text && <HeaderTag className={style.text}>{text}</HeaderTag>}
        </div>
    );
});

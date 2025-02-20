import { classNames } from "shared/lib/classNames/classNames";
import style from "./Text.module.scss";
import { useTranslation } from "react-i18next";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const { className, text, title, theme = TextTheme.PRIMARY } = props;
    return (
        <div className={classNames(style.text, {}, [className, style[theme]])}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
};

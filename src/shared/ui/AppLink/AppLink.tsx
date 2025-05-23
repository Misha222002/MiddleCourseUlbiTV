import { classNames } from "shared/lib/classNames/classNames";
import style from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, memo, ReactNode } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(style.appLink, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

import { classNames } from "@/shared/lib/classNames/classNames";
import style from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, ForwardedRef, forwardRef, memo, ReactNode } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = memo(
    forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props;
        return (
            <Link
                ref={ref}
                to={to}
                className={classNames(style.appLink, {}, [
                    className,
                    style[theme],
                ])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }),
);

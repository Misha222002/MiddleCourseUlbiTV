import React, { memo } from "react";

import style from "./Icon.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted } = props;

    return (
        <Svg
            className={classNames(inverted ? style.inverted : style.icon, {}, [
                className,
            ])}
        />
    );
});

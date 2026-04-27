import { CSSProperties, memo, useMemo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import style from "./Avatar.module.scss";
import UserFilled from "../../assets/icons/user-filled.svg";
import { AppImage } from "../AppImage";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    // когда используем иконку в инвертированных местах(пр - sidebar)
    fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, size = 100, alt, fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(() => {
        return { width: size || 100, height: size || 100 };
    }, [size]);

    const fallback = <Skeleton border={"50%"} width={size} height={size} />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            Svg={UserFilled}
            width={size}
            height={size}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            style={styles}
            alt={alt}
            src={src}
            className={classNames(style.avatar, {}, [className])}
        />
    );
});

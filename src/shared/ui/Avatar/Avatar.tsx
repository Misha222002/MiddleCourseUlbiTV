import { classNames } from "shared/lib/classNames/classNames";
import style from "./Avatar.module.scss";
import { CSSProperties, memo, useMemo } from "react";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, size, alt } = props;

    const styles = useMemo<CSSProperties>(() => {
        return { width: size || 100, height: size || 100 };
    }, [size]);
    return (
        <img
            style={styles}
            alt={alt}
            src={src}
            className={classNames(style.avatar, {}, [className])}
        />
    );
});

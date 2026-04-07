import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import style from "./Overlay.module.scss";

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = (props) => {
    const { className, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(style.overlay, {}, [className])}
        />
    );
};

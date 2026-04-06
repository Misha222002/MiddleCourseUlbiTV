import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useTheme } from "app/providers/ThemeProvider";

import style from "./Drawer.module.scss";

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer: FC<DrawerProps> = (props) => {
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();

    const mods = {
        [style.opened]: isOpen,
    };

    return (
        <Portal>
            <div
                className={classNames(style.drawer, mods, [
                    className,
                    theme,
                    "app_drawer",
                ])}
            >
                <Overlay onClick={onClose} />
                <div className={style.content}>{children}</div>
            </div>
        </Portal>
    );
};

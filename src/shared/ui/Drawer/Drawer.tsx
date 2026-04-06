import { FC, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useTheme } from "app/providers/ThemeProvider";

import style from "./Drawer.module.scss";
import { useModal } from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer: FC<DrawerProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { theme } = useTheme();

    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [style.opened]: isOpen,
        [style.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(style.drawer, mods, [
                    className,
                    theme,
                    "app_drawer",
                ])}
            >
                <Overlay onClick={close} />
                <div className={style.content}>{children}</div>
            </div>
        </Portal>
    );
};

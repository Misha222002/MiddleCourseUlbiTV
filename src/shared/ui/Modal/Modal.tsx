import { classNames } from "shared/lib/classNames/classNames";
import style from "./Modal.module.scss";
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_CLOSING_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_CLOSING_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key == "Escape") {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [style.opened]: isOpen,
        [style.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(style.modal, mods, [className])}>
                <div className={style.overlay} onClick={closeHandler}>
                    <div onClick={onContentClick} className={style.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

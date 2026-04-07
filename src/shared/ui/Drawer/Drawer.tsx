import { FC, memo, ReactNode, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useTheme } from "@/app/providers/ThemeProvider";

import style from "./Drawer.module.scss";
import { useAnimationLibs } from "@/shared/lib/components/AnimationProvider";

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const height = window.innerHeight - 100;

export const DrawerContent: FC<DrawerProps> = (props) => {
    const { Gesture, Spring } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();

    const openDrawer = () => {
        api.start({
            y: 0,
            immediate: false,
        });
    };

    useEffect(() => {
        if (isOpen) openDrawer();
    }, [isOpen, openDrawer]);

    const closeDrawer = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            offset: [, oy],
            cancel,
            canceled,
        }) => {
            if (oy < -70) cancel();

            if (last) {
                oy > height * 0.5 || (vy > 0.5 && dy > 0)
                    ? closeDrawer(vy)
                    : openDrawer();
            } else api.start({ y: oy, immediate: true });
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    const mods = {
        [style.opened]: isOpen,
    };

    const display = y.to((py) => (py < height ? "block" : "none"));

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
                <Spring.a.div
                    className={style.sheet}
                    {...bind()}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

export const Drawer = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
});

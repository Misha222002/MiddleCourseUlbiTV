import { FC, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Popover } from "@/shared/ui/Popups";
import { NotificationList } from "@/entites/Notification";
import { Button, ButtonTheme } from "@/shared/ui";
import { Icon } from "@/shared/ui/Icon/Icon";
import NotificationIcon from "@/shared/assets/icons/notification-20-20.svg";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { BrowserView, MobileView } from "react-device-detect";

import style from "./NotificationListButton.module.scss";
import { AnimationProvider } from "@/shared/lib/components/AnimationProvider";

interface NotificationListButtonProps {
    className?: string;
}

export const NotificationListButton: FC<NotificationListButtonProps> = (
    props,
) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted={true} />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(style.notificationListButton, {}, [
                        className,
                    ])}
                    direction="bottom right"
                    trigger={trigger}
                >
                    <NotificationList className={style.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
};

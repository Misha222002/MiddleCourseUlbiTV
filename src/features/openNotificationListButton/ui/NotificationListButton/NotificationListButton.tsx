import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Popover } from "shared/ui/Popups";
import { NotificationList } from "entites/Notification";
import { Button, ButtonTheme } from "shared/ui";
import { Icon } from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/notification-20-20.svg";

import style from "./NotificationListButton.module.scss";

interface NotificationListButtonProps {
    className?: string;
}

export const NotificationListButton: FC<NotificationListButtonProps> = (
    props,
) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(style.notificationListButton, {}, [
                className,
            ])}
            direction="bottom right"
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted={true} />
                </Button>
            }
        >
            <NotificationList className={style.notifications} />
        </Popover>
    );
};

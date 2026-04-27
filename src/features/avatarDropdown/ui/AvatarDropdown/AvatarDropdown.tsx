import { FC, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import {
    getRouteAdmin,
    getRouteProfile,
} from "@/app/providers/router/config/routeConfig";
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "@/entites/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";

interface avatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: FC<avatarDropdownProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) return null;

    return (
        <Dropdown
            className={classNames("", {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t("Админка"),
                              href: getRouteAdmin(),
                          },
                      ]
                    : []),
                {
                    content: t("Профиль пользователя"),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t("Выйти"),
                    onClick: onLogout,
                },
            ]}
            direction="bottom left"
            trigger={
                <Avatar
                    fallbackInverted={true}
                    size={30}
                    src={authData.avatar}
                />
            }
        />
    );
};

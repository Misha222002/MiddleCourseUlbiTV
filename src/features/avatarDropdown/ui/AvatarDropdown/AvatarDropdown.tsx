import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Dropdown } from "@/shared/ui/Popups";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "@/entites/User";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

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
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    content: t("Профиль пользователя"),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t("Выйти"),
                    onClick: onLogout,
                },
            ]}
            direction="bottom left"
            // className={style.dropdown}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
};

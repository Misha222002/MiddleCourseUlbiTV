import { classNames } from "shared/lib/classNames/classNames";
import style from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/item";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entites/User";

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
    authOnly?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item?.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(style.item, { [style.collapsed]: collapsed })}
            theme={AppLinkTheme.INVERTED}
            to={item?.path || "/"}
        >
            {item?.Icon && <item.Icon className={style.icon} />}
            <span className={style.link}>{t(item?.text || "")}</span>
        </AppLink>
    );
});

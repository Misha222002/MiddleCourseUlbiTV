import { classNames } from "shared/lib/classNames/classNames";
import style from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/item";
import { memo } from "react";

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            className={classNames(style.item, { [style.collapsed]: collapsed })}
            theme={AppLinkTheme.INVERTED}
            to={item.path}
        >
            <item.Icon className={style.icon} />
            <span className={style.link}>{t(item.text)}</span>
        </AppLink>
    );
});

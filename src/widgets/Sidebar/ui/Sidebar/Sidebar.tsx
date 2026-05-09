import { memo, useState } from "react";

import { useSelector } from "react-redux";

import { LanguageSwitcher } from "@/features/LanguageSwithcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui";
import { ButtonSize } from "@/shared/ui/Button";

import style from "./Sidebar.module.scss";
import { getSidebarItems } from "../../model/selectors/getSidebarItem";
import { SidebarItem } from "../SidebatItem/SidebarItem";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                style.sidebar,
                { [style.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={style.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={style.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={style.swithers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={style.lang} />
            </div>
        </aside>
    );
});

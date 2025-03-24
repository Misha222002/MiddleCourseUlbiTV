import { classNames } from "shared/lib/classNames/classNames";
import style from "./Sidebar.module.scss";
import { memo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LanguageSwitcher from "shared/ui/LanguageSwithcher/LanguageSwitcher";
import { Button, ButtonTheme } from "shared/ui";
import { ButtonSize } from "shared/ui/Button/Button";
import { SidebarItemsList } from "widgets/Sidebar/model/item";
import { SidebarItem } from "widgets/Sidebar/ui/SidebatItem/SidebarItem";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
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
                {SidebarItemsList.map((item) => (
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
        </div>
    );
});

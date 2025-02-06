import { classNames } from "shared/lib/classNames/classNames";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwithcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";
import { ButtonSize } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation(["translation", "about"]);

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
                <div>
                    <AppLink
                        className={style.item}
                        theme={AppLinkTheme.INVERTED}
                        to={RoutePath.main}
                    >
                        <MainIcon className={style.icon} />
                        <span className={style.link}>{t("Главная")}</span>
                    </AppLink>
                </div>
                <div className={style.item}>
                    <AppLink
                        className={style.item}
                        theme={AppLinkTheme.INVERTED}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={style.icon} />
                        <span className={style.link}>
                            {t("О сайте", { ns: "about" })}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={style.swithers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={style.lang} />
            </div>
        </div>
    );
};

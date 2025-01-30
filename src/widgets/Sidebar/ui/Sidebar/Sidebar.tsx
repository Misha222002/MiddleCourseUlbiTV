import { classNames } from "shared/lib/classNames/classNames";
import * as style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwithcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                style.sidebar,
                { [style.collapsed]: collapsed },
                [className],
            )}
        >
            <button onClick={onToggle}>{t("Кнопка")}</button>
            <div className={style.swithers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={style.lang} />
            </div>
        </div>
    );
};

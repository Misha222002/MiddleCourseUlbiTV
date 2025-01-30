import { classNames } from "shared/lib/classNames/classNames";
import * as style from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation(["translation", "about"]);
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={"/"}
                    className={style.mainLink}
                >
                    {t("Главная")}
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={"/about"}>
                    {t("О сайте", { ns: "about" })}
                </AppLink>
            </div>
        </div>
    );
}

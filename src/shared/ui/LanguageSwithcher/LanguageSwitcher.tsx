import { classNames } from "shared/lib/classNames/classNames";
import style from "./LanguageSwitcher.module.scss";
import { Button, ThemeButton } from "../Button/Button";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames(style.languageSwitcher, {}, [className])}
        >
            {t("Язык")}
        </Button>
    );
};

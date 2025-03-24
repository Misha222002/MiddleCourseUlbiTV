import { classNames } from "shared/lib/classNames/classNames";
import style from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "../Button/Button";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames(style.languageSwitcher, {}, [className])}
        >
            {t(short ? "Короткий язык" : "Язык")}
        </Button>
    );
};

export default memo(LanguageSwitcher);

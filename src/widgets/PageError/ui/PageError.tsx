import { classNames } from "shared/lib/classNames/classNames";
import * as style from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(style.pageError, {}, [className])}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};

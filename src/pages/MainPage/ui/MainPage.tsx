import { Counter } from "entites/Counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

function MainPage() {
    const { t } = useTranslation();

    return <div>{t("Главная страница")}</div>;
}

export default MainPage;

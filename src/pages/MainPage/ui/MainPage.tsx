import { useTranslation } from "react-i18next";

import { Counter } from "@/entites/Counter";
import { Page } from "@/widgets/Page";

function MainPage() {
    const { t } = useTranslation();

    return (
        <Page data-testid={"MainPage"}>
            {t("Главная страница")}
            <Counter />
        </Page>
    );
}

export default MainPage;

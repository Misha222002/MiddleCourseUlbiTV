import { useTranslation } from "react-i18next";

function AboutPanelPage() {
    const { t } = useTranslation("about");
    return <div>{t("Админ панель")}</div>;
}

export default AboutPanelPage;

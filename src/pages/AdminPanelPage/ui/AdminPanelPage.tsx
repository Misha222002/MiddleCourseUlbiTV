import { useTranslation } from "react-i18next";

function AdminPanelPage() {
    const { t } = useTranslation("about");
    return <div data-testid={"AdminPanelPage"}>{t("Админ панель")}</div>;
}

export default AdminPanelPage;

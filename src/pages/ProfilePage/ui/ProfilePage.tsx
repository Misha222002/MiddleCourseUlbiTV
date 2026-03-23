import Page from "widgets/Page/Page";

import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui";
import { useTranslation } from "react-i18next";

function ProfilePage() {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation("profile");

    if (!id) {
        return <Text text={t("Профиль не найден")} />;
    }

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
}

export default ProfilePage;

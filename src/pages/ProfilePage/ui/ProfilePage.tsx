import { profileReducer } from "entites/Profile";
import { useTranslation } from "react-i18next";
import {
    DynamicModelLoader,
    ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";

const reducers: ReducersList = {
    profile: profileReducer,
};

function ProfilePage() {
    const { t } = useTranslation();

    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount>
            <div>{t("Страница профиля")}</div>
        </DynamicModelLoader>
    );
}

export default ProfilePage;

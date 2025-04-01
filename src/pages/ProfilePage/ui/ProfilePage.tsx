import { fetchProfileData, ProfileCard, profileReducer } from "entites/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
    DynamicModelLoader,
    ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
    profile: profileReducer,
};

function ProfilePage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModelLoader>
    );
}

export default ProfilePage;

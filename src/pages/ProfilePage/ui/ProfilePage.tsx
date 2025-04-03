import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileLoading,
    ProfileCard,
    profileReducer,
} from "entites/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
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

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard data={data} />
        </DynamicModelLoader>
    );
}

export default ProfilePage;

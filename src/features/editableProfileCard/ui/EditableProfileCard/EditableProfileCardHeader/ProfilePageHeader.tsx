import { useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entites/User";
import { getProfileData } from "@/features/editableProfileCard/model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "@/features/editableProfileCard/model/services/updateProfileData/updateProfileData";
import { profileActions } from "@/features/editableProfileCard/model/slice/profileSlice";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme, Text } from "@/shared/ui";

import style from "./ProfilePageHeader.module.scss";

interface ProfilePageHeader {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeader) => {
    const { className } = props;
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);
    const canEdit = authData?.id === profileData?.id;
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.onCancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(style.profilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            {canEdit && (
                <div className={style.btnsWrapper}>
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            className={style.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            data-testid={"ProfilePageHeader.EditButton"}
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={onCancelEdit}
                                className={style.editBtn}
                                theme={ButtonTheme.OUTLINE_RED}
                                data-testid={"ProfilePageHeader.CancelButton"}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                onClick={onSave}
                                className={style.saveBtn}
                                theme={ButtonTheme.OUTLINE}
                                data-testid={"ProfilePageHeader.SaveButton"}
                            >
                                {t("Сохранить")}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

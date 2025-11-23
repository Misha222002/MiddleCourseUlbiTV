import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme, Text } from "shared/ui";
import { useSelector } from "react-redux";
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entites/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entites/User";

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
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={onCancelEdit}
                                className={style.editBtn}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                onClick={onSave}
                                className={style.saveBtn}
                                theme={ButtonTheme.OUTLINE}
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

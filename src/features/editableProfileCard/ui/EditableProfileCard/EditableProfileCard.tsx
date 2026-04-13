import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Country } from "@/entites/Country";
import { Currency } from "@/entites/Currency";
import { ProfileCard } from "@/entites/Profile";
import { getProfileError } from "@/features/editableProfileCard/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "@/features/editableProfileCard/model/selectors/getProfileLoading/getProfileLoading";
import { getProfileReadonly } from "@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateErrors } from "@/features/editableProfileCard/model/selectors/getProfileValidateError/getProfileValidateError";
import { fetchProfileData } from "@/features/editableProfileCard/model/services/fetchProfileData/fetchProfileData";
import {
    profileActions,
    profileReducer,
} from "@/features/editableProfileCard/model/slice/profileSlice";
import { ValidateProfileError } from "@/features/editableProfileCard/model/types/editableProfileCardSchema";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModelLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { TextTheme, Text } from "@/shared/ui/Text";

import cls from "./EditableProfileCard.module.scss";
import { ProfilePageHeader } from "./EditableProfileCardHeader/ProfilePageHeader";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation("profile");

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            "Имя и фамилия обязательны",
        ),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    };

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || "" }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            const validateValue = value?.replace(/\D+/g, "");
            dispatch(
                profileActions.updateProfile({
                    age: Number(validateValue || 0),
                }),
            );
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModelLoader reducers={reducers}>
            <ProfilePageHeader />

            <div
                className={classNames(cls.EditableProfileCard, {}, [className])}
            >
                {validateErrors &&
                    validateErrors?.length > 0 &&
                    validateErrors.map(
                        (err: keyof typeof validateErrorsTranslate) => (
                            <Text
                                key={err}
                                theme={TextTheme.ERROR}
                                text={validateErrorsTranslate[err]}
                                data-testid={"EditableProfileCard.Error"}
                            />
                        ),
                    )}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    readonly={readonly}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModelLoader>
    );
});

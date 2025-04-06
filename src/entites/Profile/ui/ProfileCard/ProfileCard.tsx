import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../modal/types/profile";
import { FC } from "react";
import { Loader } from "shared/ui/Loader/Loader";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className, data, isLoading, error } = props;
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div
                className={classNames(style.profileCard, {}, [
                    className,
                    style.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(style.profileCard, {}, [
                    className,
                    style.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                ></Text>
            </div>
        );
    }

    return (
        <div className={classNames(style.profileCard, {}, [className])}>
            <div className={style.header}>
                <Text title={t("Профиль")} />
                <Button className={style.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={style.data}>
                <Input
                    className={style.input}
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                />
                <Input
                    className={style.input}
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия")}
                />
            </div>
        </div>
    );
};

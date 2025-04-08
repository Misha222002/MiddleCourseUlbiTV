import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../modal/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entites/Currency/model/types/currency";
import { CurrencySelect } from "entites/Currency";
import { Country } from "entites/Country/model/types/country";
import { CountrySelect } from "entites/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        readonly,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
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
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                />
            </div>
        );
    }

    const Mods = {
        [style.editing]: !readonly,
    };

    return (
        <div className={classNames(style.profileCard, Mods, [className])}>
            <div className={style.data}>
                {data?.avatar && (
                    <div className={style.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    className={style.input}
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    className={style.input}
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия")}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    className={style.input}
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={style.input}
                    value={data?.city}
                    placeholder={t("Город")}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    className={style.input}
                    value={data?.username}
                    placeholder={t("Ваш username")}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    className={style.input}
                    value={data?.avatar}
                    placeholder={t("Ваш аватар")}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={style.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={style.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

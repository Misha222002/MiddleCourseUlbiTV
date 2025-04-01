import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "entites/Profile/modal/selectors/getProfileData/getProfileData";
import { getProfileLoading } from "entites/Profile/modal/selectors/getProfileLoading/getProfileLoading";
import { getProfileError } from "entites/Profile/modal/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation("profile");

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
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

import { classNames } from "shared/lib/classNames/classNames";
import style from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(style.loginForm, {}, [className])}>
            <Input
                type="text"
                className={style.input}
                placeholder={t("Введите username")}
                autofocus
            />
            <Input
                type="text"
                className={style.input}
                placeholder={t("Введите пароль")}
            />
            <Button theme={ButtonTheme.OUTLINE} className={style.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};

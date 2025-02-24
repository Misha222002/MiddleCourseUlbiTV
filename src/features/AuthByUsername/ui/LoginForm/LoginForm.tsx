import { classNames } from "shared/lib/classNames/classNames";
import style from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import {
    loginActions,
    loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
    DynamicModelLoader,
    ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginFormComponent = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    // const { username, password, error, isLoading } = useSelector(getLoginState);

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModelLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(style.loginForm, {}, [className])}>
                <Text title={t("Форма авторизации")} />
                {error && (
                    <Text
                        text={t("Вы ввели неверный логин или пароль")}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    type="text"
                    className={style.input}
                    placeholder={t("Введите username")}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={style.input}
                    placeholder={t("Введите пароль")}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINE}
                    className={style.loginBtn}
                    disabled={isLoading}
                >
                    {t("Войти")}
                </Button>
            </div>
        </DynamicModelLoader>
    );
};

const LoginForm = memo(LoginFormComponent);

export default LoginForm;

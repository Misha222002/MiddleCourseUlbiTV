import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entites/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(style.navbar, {}, [className])}>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={style.links}
                >
                    {t("Выйти")}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={style.links}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </div>
    );
});

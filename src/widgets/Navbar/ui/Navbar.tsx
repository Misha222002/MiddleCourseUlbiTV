/* eslint-disable i18next/no-literal-string */
import { classNames } from "@/shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "@/features/AuthByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entites/User";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/app/providers/router/config/routeConfig";
import { HStack } from "@/shared/ui/Stack";

import { NotificationListButton } from "@/features/openNotificationListButton";
import { AvatarDropdown } from "@/features/avatarDropdown";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(style.navbar, {}, [className])}>
                <Text
                    className={style.appName}
                    theme={TextTheme.INVERTED}
                    title={"Misha Ivanov"}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.INVERTED}
                    className={style.createBtn}
                >
                    Создать статью
                </AppLink>
                <HStack gap="16" className={style.actions}>
                    <NotificationListButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(style.navbar, {}, [className])}>
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
        </header>
    );
});

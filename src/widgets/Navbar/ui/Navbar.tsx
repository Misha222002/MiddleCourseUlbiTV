import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui";
import { useCallback, useState } from "react";

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation(["translation", "about"]);

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={style.links}
            >
                {t("Войти")}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                fdsafsadf dasfas sdafsad sadf
            </Modal>
        </div>
    );
}

import { Suspense } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
// import style from "./LoginModal.module.scss";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose, className } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames("", {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

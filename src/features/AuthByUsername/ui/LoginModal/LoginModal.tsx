import { classNames } from "shared/lib/classNames/classNames";
// import style from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

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

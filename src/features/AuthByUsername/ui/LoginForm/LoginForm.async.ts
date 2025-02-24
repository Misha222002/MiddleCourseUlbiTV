import { LoginFormProps } from "./LoginForm";
import { FC, lazy } from "react";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                res(import("./LoginForm"));
            }, 1000);
        }),
);

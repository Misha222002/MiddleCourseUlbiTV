import { AddCommentFormProps } from "./AddCommentForm";
import { FC, lazy } from "react";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                res(import("./AddCommentForm"));
            }, 1000);
        }),
);

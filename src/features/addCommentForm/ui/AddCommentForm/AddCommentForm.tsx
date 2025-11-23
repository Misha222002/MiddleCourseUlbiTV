/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import style from "./AddCommentForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui";
import { useSelector } from "react-redux";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "features/addCommentForm/model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "features/addCommentForm/model/slice/addCommentFormSlice";
import {
    DynamicModelLoader,
    ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");

        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModelLoader reducers={reducers}>
            <div className={classNames(style.addCommentForm, {}, [className])}>
                <Input
                    className={style.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder="Введите текст комметария"
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                    Отправить
                </Button>
            </div>
        </DynamicModelLoader>
    );
};

export default memo(AddCommentForm);

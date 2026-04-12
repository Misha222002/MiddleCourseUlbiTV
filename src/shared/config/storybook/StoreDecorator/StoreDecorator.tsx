import React, { FC } from "react";
import "@/app/styles/index.scss";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { DeepPartial } from "@/entites/Counter";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { ReducersList } from "@/shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { articleDetailsReducer } from "@/entites/Article/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";

interface Props {
    children?: React.ReactNode;
    state: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}

const defaultAsyncreducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsReducer,
};

export const StoreDecorator: FC<Props> = ({
    children,
    state,
    asyncReducers,
}) => (
    <StoreProvider
        asyncReducers={{ ...defaultAsyncreducers, ...asyncReducers }}
        initialState={state}
    >
        <div>{children}</div>
    </StoreProvider>
);

/* eslint-disable custom-plugin/layer-imports */
import React, { FC } from "react";

import "@/app/styles/index.scss";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { articleDetailsReducer } from "@/entites/Article/testing";
import { DeepPartial } from "@/entites/Counter";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";
import { ReducersList } from "@/shared/lib/components/DynamicModelLoader/DynamicModelLoader";

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

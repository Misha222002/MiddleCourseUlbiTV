import React, { FC } from "react";
import "app/styles/index.scss";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entites/Profile";

interface Props {
    children?: React.ReactNode;
    state: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const defaultAsyncreducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
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

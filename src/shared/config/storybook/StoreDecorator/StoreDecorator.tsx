import React, { FC } from "react";
import "app/styles/index.scss";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entites/Profile";
import { ReducersList } from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";

interface Props {
    children?: React.ReactNode;
    state: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}

const defaultAsyncreducers: ReducersList = {
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

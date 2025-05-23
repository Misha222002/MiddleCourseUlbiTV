import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { DeepPartial } from "entites/Counter";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const navigate = useMemo(() => useNavigate, []);

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate(),
    );

    return <Provider store={store}>{children}</Provider>;
};

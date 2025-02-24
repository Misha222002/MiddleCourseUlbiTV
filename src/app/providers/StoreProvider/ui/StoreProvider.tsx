import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { DeepPartial } from "entites/Counter";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return <Provider store={store}>{children}</Provider>;
};

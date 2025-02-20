import React, { FC } from "react";
import "app/styles/index.scss";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";

interface Props {
    children?: React.ReactNode;
    state: DeepPartial<StateSchema>;
}
export const StoreDecorator: FC<Props> = ({ children, state }) => (
    <StoreProvider initialState={state}>
        <div>{children}</div>
    </StoreProvider>
);

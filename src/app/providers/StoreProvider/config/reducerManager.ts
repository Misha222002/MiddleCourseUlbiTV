import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema";
import { CounterSchema } from "entites/Counter";
import { UserSchema } from "entites/User";

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state?.[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(
                state as unknown as {
                    counter: CounterSchema;
                    user: UserSchema;
                },
                action,
            );
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}

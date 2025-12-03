import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entites/User";
import { counterReducer } from "entites/Counter";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { $api } from "shared/api/api";
import { saveScrollReducer } from "features/saveScroll";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        saveScroll: saveScrollReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArgs: ThunkExtraArg = {
        api: $api || "http://localhost:8000",
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument: extraArgs },
            }),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

import type {
    StateSchema,
    ReduxStoreWithManager,
} from "app/providers/StoreProvider/config/StateSchema";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import type { AppDispatch } from "app/providers/StoreProvider/config/store";
import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";

export {
    AppDispatch,
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
};

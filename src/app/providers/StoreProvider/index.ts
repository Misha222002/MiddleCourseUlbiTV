import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
} from "./config/StateSchema";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import type { AppDispatch } from "app/providers/StoreProvider/config/store";
import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";

export {
    ThunkConfig,
    ThunkExtraArg,
    AppDispatch,
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
};

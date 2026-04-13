import { StoreProvider } from "@/app/providers/StoreProvider/ui/StoreProvider";

import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKey,
} from "./config/StateSchema";
import { createReduxStore } from "./config/store";
import type { AppDispatch } from "./config/store";

export {
    ThunkConfig,
    ThunkExtraArg,
    AppDispatch,
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
};

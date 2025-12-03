export type { SaveScrollSchema } from "./model/types/saveScrollSchema";

export {
    getSaveScroll,
    getSaveScrollByPath,
} from "./model/selectors/saveScroll";

export {
    saveScrollActions,
    saveScrollReducer,
} from "./model/slices/saveScrollSlice";

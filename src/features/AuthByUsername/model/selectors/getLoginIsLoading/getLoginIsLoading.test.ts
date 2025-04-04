import { getLoginIsLoading } from "./getLoginIsLoading";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";

describe("getLoginIsLoading.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should return false", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});

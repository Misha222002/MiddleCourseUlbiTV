import { getLoginUsername } from "./getLoginUsername";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";

describe("getLoginIsLoading.test", () => {
    test("should return username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "misha",
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("misha");
    });
    test("should return empty string", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});

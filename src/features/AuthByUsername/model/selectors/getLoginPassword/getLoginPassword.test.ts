import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginIsLoading.test", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "123",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("123");
    });
    test("should return not password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});

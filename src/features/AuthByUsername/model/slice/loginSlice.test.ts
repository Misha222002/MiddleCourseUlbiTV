import { DeepPartial } from "entites/Counter";
import {
    loginActions,
    loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { loginSchema } from "features/AuthByUsername/model/types/loginSchema";

describe("loginSlice.test", () => {
    test("set username", () => {
        const state: DeepPartial<loginSchema> = {
            username: "123",
        };
        expect(
            loginReducer(
                state as loginSchema,
                loginActions.setUsername("12345"),
            ),
        ).toEqual({ username: "12345" });
    });
    test("set password", () => {
        const state: DeepPartial<loginSchema> = {
            password: "123",
        };
        expect(
            loginReducer(
                state as loginSchema,
                loginActions.setPassword("12345"),
            ),
        ).toEqual({ password: "12345" });
    });
});

import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "123",
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual("123");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});

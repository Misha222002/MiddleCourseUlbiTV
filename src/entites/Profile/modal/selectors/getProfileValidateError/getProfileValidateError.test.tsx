import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";
import { getProfileValidateErrors } from "./getProfileValidateError";
import { ValidateProfileError } from "entites/Profile/modal/types/profile";

describe("getProfileValidateError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});

import { DeepPartial } from "entites/Counter";
import { profileActions, profileReducer } from "./profileSlice";
import {
    ProfileSchema,
    ValidateProfileError,
} from "entites/Profile/modal/types/profile";
import { Currency } from "entites/Currency";
import { Country } from "entites/Country";
import { updateProfileData } from "entites/Profile/modal/services/updateProfileData/updateProfileData";

const data = {
    age: 22,
    city: "SDFSD",
    country: Country?.Armenia,
    currency: Currency.EUR,
    first: "Misha",
    lastname: "Ivanov",
    username: "mvivanov",
};

describe("profileSlice.test", () => {
    test("set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test("cansel edit", () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: "" },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.onCancelEdit(),
            ),
        ).toEqual({ readonly: true, validateError: [], data, form: data });
    });

    test("update profile", () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: "123" },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: "123456",
                }),
            ),
        ).toEqual({ form: { username: "123456" } });
    });

    test("update profile pending service", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending("", undefined),
            ),
        ).toEqual({ isLoading: true, validateError: [] });
    });

    test("update profile fullfild service", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ""),
            ),
        ).toEqual({
            isLoading: false,
            validateError: [],
            readonly: true,
            form: data,
            data,
        });
    });
});

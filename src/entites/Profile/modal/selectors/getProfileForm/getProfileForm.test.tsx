import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entites/Country";
import { Currency } from "entites/Currency";

describe("getProfileForm.test", () => {
    test("should return error", () => {
        const data = {
            age: 22,
            city: "SDFSD",
            country: Country?.Armenia,
            currency: Currency.EUR,
            first: "Misha",
            lastname: "Ivanov",
            username: "mvivanov",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

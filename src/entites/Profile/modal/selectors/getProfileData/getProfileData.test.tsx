import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "entites/Counter";
import { getProfileData } from "./getProfileData";
import { Currency } from "entites/Currency";
import { Country } from "entites/Country";

describe("getProfileData.test", () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

import axios from "axios";
import { validateProfileData } from "./validateProfile";
import { Country } from "entites/Country";
import { Currency } from "entites/Currency";
import { ValidateProfileError } from "entites/Profile/modal/types/profile";

const data = {
    age: 22,
    city: "SDFSD",
    country: Country?.Armenia,
    currency: Currency.EUR,
    first: "Misha",
    lastname: "Ivanov",
    username: "mvivanov",
};

describe("validateProfileData.test", () => {
    test("success", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test("without firs and last name", async () => {
        const result = validateProfileData({
            ...data,
            first: undefined,
            lastname: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test("incorrect name", async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});

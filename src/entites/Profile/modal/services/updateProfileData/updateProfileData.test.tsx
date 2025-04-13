import axios from "axios";
import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsynkThunk";
import { Country } from "entites/Country";
import { Currency } from "entites/Currency";
import { ValidateProfileError } from "entites/Profile/modal/types/profile";

jest.mock("axios");

const data = {
    age: 22,
    city: "SDFSD",
    country: Country?.Armenia,
    currency: Currency.EUR,
    first: "Misha",
    lastname: "Ivanov",
    username: "mvivanov",
};

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("updateProfileData.test", () => {
    test("success", async () => {
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: data }));

        const thunk = TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        const result = await thunk.callThunk();

        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("server error", async () => {
        mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test("validate error", async () => {
        const thunk = TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: undefined },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});

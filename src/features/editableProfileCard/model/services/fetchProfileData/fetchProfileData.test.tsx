import axios from "axios";

import { Country } from "@/entites/Country";
import { Currency } from "@/entites/Currency";
import { TestAsyncThunk } from "@/shared/lib/test/TestAsyncThunk/TestAsynkThunk";

import { fetchProfileData } from "./fetchProfileData";

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

describe("fetchProfileData.test", () => {
    test("success", async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: data }));

        const thunk = TestAsyncThunk(fetchProfileData);
        const result = await thunk.callThunk("1");

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("error login", async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = TestAsyncThunk(fetchProfileData);
        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
    });
});

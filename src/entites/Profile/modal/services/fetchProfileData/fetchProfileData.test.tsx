import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios from "axios";
import { userActions } from "entites/User";
import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsynkThunk";
import { Country } from "entites/Country";
import { Currency } from "entites/Currency";

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
        const result = await thunk.callThunk();

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("error login", async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = TestAsyncThunk(fetchProfileData);
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
    });
});

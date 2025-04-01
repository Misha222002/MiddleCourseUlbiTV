import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { AxiosStatic } from "axios";
import axios from "axios";

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

export const TestAsyncThunk = <Return, Arg, RejectedValue>(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
) => {
    const dispatch: jest.MockedFn<any> = jest.fn();
    const getState: () => StateSchema = jest.fn();
    const api: jest.Mocked<AxiosStatic> = mockedAxios;
    const navigate: jest.MockedFn<any> = jest.fn();

    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, { api, navigate });
        return result;
    };

    return {
        dispatch,
        getState,
        actionCreator,
        callThunk,
    };
};

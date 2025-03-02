import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export const TestAsyncThunk = <Return, Arg, RejectedValue>(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
) => {
    const dispatch: jest.MockedFn<any> = jest.fn();
    const getState: () => StateSchema = jest.fn();

    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, undefined);
        return result;
    };

    return {
        dispatch,
        getState,
        actionCreator,
        callThunk,
    };
};

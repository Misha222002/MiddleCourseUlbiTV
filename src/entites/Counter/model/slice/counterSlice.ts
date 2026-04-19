import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CounterSchema } from "../types/CounterSchema";
import { buildSlice } from "@/shared/lib/store/buildSlice";

const initialState: CounterSchema = {
    value: 0,
};

const counterSlice = buildSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented: (state) => {
            state.value += 1;
        },
        add: (state, { payload }: PayloadAction<number>) => {
            state.value += payload;
        },
        decremented: (state) => {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;

// export const { reducer: counterReducer } = counterSlice;

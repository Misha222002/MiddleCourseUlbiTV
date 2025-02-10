import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import type { CounterSchema } from "entites/Counter/model/types/CounterSchema";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);

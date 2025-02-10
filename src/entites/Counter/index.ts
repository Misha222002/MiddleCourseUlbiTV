import { getCounter } from "./model/selectors/getCounter/getCounter";
import { counterReducer } from "./model/slice/counterSlice";
import type { CounterSchema, DeepPartial } from "./model/types/CounterSchema";
import { Counter } from "./ui/Counter";

export { Counter, CounterSchema, counterReducer, getCounter, DeepPartial };

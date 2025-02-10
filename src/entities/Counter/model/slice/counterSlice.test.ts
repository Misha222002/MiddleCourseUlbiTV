import { CounterSchema } from "entities/Counter/model/types/CounterSchema";
import { counterReducer, counterActions } from "./counterSlice";

describe("counterSlice", () => {
    test("decriment", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decremented())).toEqual({
            value: 9,
        });
    });
    test("increment", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.incremented())).toEqual({
            value: 11,
        });
    });
    test("shoul work with empty state", () => {
        expect(counterReducer(undefined, counterActions.incremented())).toEqual(
            {
                value: 1,
            },
        );
    });
});

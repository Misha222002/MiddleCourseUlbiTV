import { screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/test/ComponentRender/ComponentRender";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
    test("sidebar render", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });
    test("decriment", async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId("decriment-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
    test("increment", async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId("increment-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
});

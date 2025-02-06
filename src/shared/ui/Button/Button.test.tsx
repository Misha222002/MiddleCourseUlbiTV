import { Button, ThemeButton } from "shared/ui";
import { render, screen } from "@testing-library/react";

describe("button", () => {
    test("button render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("button clear theme", () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});

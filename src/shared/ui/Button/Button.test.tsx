import { render, screen } from "@testing-library/react";

import { Button, ButtonTheme } from "@/shared/ui";

describe("button", () => {
    test("button render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("button clear theme", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});

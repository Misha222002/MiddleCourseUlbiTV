import { fireEvent, render, screen } from "@testing-library/react";
import { renderWIthTranslation } from "shared/lib/test/RenderWIthTranslation/RenderWIthTranslation";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("sidebar", () => {
    test("sidebar render", () => {
        renderWIthTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("toggle", () => {
        renderWIthTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});

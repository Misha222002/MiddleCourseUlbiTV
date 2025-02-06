import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/test/ComponentRender/ComponentRender";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("sidebar", () => {
    test("sidebar render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("toggle", () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});

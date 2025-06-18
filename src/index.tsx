import ReactDOM from "react-dom/client";
import App from "./app/App";
import "app/styles/index.scss";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);

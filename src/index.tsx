import ReactDOM from "react-dom/client";
import App from "./app/App";
import "app/styles/index.scss";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ErrorBoundary>
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
        ,
    </ErrorBoundary>,
);

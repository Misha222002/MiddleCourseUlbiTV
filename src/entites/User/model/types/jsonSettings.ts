import { Theme } from "@/shared/lib/context/ThemeContext";

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean;
}

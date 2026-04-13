import style from "./popup.module.scss";
import { DropdownDirection } from "../../../types/ui";

export const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": style.optionsBottomLeft,
    "bottom right": style.optionsBottomRight,
    "top left": style.optionsTopLeft,
    "top right": style.optionsTopRight,
};

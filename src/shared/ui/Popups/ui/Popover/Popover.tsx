import { FC, ReactNode } from "react";
import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";

import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";

import style from "./Popover.module.scss";
import popupStyles from "../../styles/popup.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover: FC<PopoverProps> = (props) => {
    const { className, direction = "bottom right", trigger, children } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(style.Popover, {}, [
                className,
                popupStyles.popup,
            ])}
        >
            <PopoverButton className={popupStyles.trigger}>
                {trigger}
            </PopoverButton>
            <PopoverPanel
                //  anchor="bottom"
                //  static={false}
                //  unmount={true}
                className={classNames(style.panel, {}, menuClasses)}
            >
                {children}
            </PopoverPanel>
        </HPopover>
    );
};

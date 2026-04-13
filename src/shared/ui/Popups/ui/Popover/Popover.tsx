import { FC, ReactNode } from "react";

import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { DropdownDirection } from "@/shared/types/ui";

import style from "./Popover.module.scss";
import { mapDirectionClass } from "../../styles/consts";
import popupStyles from "../../styles/popup.module.scss";

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
            <PopoverButton as="div" className={popupStyles.trigger}>
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

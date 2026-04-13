import { ReactNode } from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";

import { classNames } from "@/shared/lib/classNames/classNames";
import { DropdownDirection } from "@/shared/types/ui";

import style from "./Dropdown.module.scss";
import { AppLink } from "../../../AppLink/AppLink";
import { mapDirectionClass } from "../../styles/consts";
import popupStyles from "../../styles/popup.module.scss";

interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, items, trigger, direction = "bottom right" } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(style.dropdown, {}, [
                className,
                popupStyles.popup,
            ])}
        >
            <MenuButton className={popupStyles.trigger}>{trigger}</MenuButton>
            <MenuItems
                anchor="bottom"
                className={classNames(style.menu, {}, menuClasses)}
            >
                {items.map((item, key) => {
                    const content = ({ focus }: { focus: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(style.item, {
                                [popupStyles.active]: focus,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <MenuItem
                                key={item.href}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </MenuItem>
                        );
                    }
                    return (
                        <MenuItem
                            key={"dropdown-item" + key}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
};

// export Dropdown;

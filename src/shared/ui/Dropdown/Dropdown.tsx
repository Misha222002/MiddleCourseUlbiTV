import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import style from "./Dropdown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": style.optionsBottomLeft,
    "bottom right": style.optionsBottomRight,
    "top left": style.optionsTopLeft,
    "top right": style.optionsTopRight,
};

const Dropdown = (props: DropdownProps) => {
    const { className, items, trigger, direction = "bottom right" } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(style.dropdown, {}, [className])}>
            <MenuButton className={style.btn}>{trigger}</MenuButton>
            <MenuItems
                anchor="bottom"
                className={classNames(style.menu, {}, menuClasses)}
            >
                {items.map((item) => {
                    const content = ({ focus }: { focus: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(style.item, {
                                [style.active]: focus,
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
                            key={item.href}
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

export default Dropdown;

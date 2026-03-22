import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";

import style from "./ListBox.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";
import { DropdownDirection } from "shared/types/ui";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: <T extends string>(value: T) => void; // для работы с enum
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": style.optionsBottomLeft,
    "bottom right": style.optionsBottomRight,
    "top left": style.optionsTopLeft,
    "top right": style.optionsTopRight,
};

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue = "выберите опцию",
        onChange,
        readonly,
        direction = "bottom right",
        label,
    } = props;

    const optionsClass = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{label + ">"}</span>}

            <HListBox
                disabled={readonly}
                as={"div"}
                className={classNames(style.listBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <ListboxButton as={Fragment}>
                    <Button disabled={readonly} className={style.trigger}>
                        {value || defaultValue}
                    </Button>
                </ListboxButton>
                <ListboxOptions
                    //  anchor="bottom"
                    className={classNames(style.options, {}, optionsClass)}
                >
                    {items?.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={classNames(style.item, {
                                        [style.focus]: focus,
                                        [style.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && "!!!"}
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </HStack>
    );
}

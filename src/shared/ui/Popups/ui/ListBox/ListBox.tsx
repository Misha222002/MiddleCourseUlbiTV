import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirection } from "shared/types/ui";
import { HStack } from "shared/ui/Stack";
import { Button } from "shared/ui/Button/Button";
import { mapDirectionClass } from "../../styles/consts";

import style from "./ListBox.module.scss";
import popupStyles from "../../styles/popup.module.scss";

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
                className={classNames(style.listBox, {}, [
                    className,
                    popupStyles.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <ListboxButton as={Fragment}>
                    <Button disabled={readonly} className={popupStyles.trigger}>
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
                                        [popupStyles.active]: focus,
                                        [popupStyles.disabled]: item.disabled,
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

import { useCallback } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/Popups";

import { Country } from "../../model/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countries = Object.values(Country).map((country) => ({
    value: country,
    content: country,
}));

export const CountrySelect = (props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const Mods = {};

    return (
        <ListBox
            className={classNames("", Mods, [className])}
            items={countries}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            label={t("Укажите страну")}
            defaultValue={t("Укажите страну")}
            direction="top right"
        />
    );
};

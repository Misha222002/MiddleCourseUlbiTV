import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { useCallback, useMemo } from "react";
import { Country } from "entites/Country/model/types/country";
import { ListBox } from "shared/ui/Popups";

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

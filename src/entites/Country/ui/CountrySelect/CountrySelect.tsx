import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { useCallback, useMemo } from "react";
import { Country } from "entites/Country/model/types/country";

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

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, []);

    const Mods = {};

    return (
        <Select
            label={t("Укажите страну")}
            className={classNames("", Mods, [className])}
            options={countries}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        ></Select>
    );
};

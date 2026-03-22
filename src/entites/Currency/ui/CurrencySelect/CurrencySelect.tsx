import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import { useCallback, useMemo } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const Mods = {};

    return (
        <ListBox
            className={classNames("", Mods, [className])}
            onChange={onChangeHandler}
            defaultValue={t("Укажите валюту")}
            label={t("Укажите валюту")}
            value={value}
            items={options}
            readonly={readonly}
            direction="top right"
        />
    );
};

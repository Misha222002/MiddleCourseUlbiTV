import { classNames, Mods } from "shared/lib/classNames/classNames";
import style from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, value, onChange, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option className={style.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);

    const mods: Mods = {};

    return (
        <div className={classNames(style.Wrapper, {}, [className])}>
            {label && <span className={style.label}>{label}</span>}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={style.select}
            >
                {optionList}
            </select>
        </div>
    );
});

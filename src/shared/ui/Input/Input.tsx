import { classNames } from "shared/lib/classNames/classNames";
import style from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readonly"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

const InputComponent = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div
            className={classNames(style.inputWrapper, {}, [
                className,
                style.readonly,
            ])}
        >
            {placeholder && (
                <div className={style.placeholder}>{placeholder + ">"}</div>
            )}
            <div className={style.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={style.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={style.caret}
                        style={{ left: `${caretPosition * 7.5}px` }}
                    />
                )}
            </div>
        </div>
    );
};

export const Input = memo(InputComponent);

import { memo, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Code.module.scss";
import { Button, ButtonTheme } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import CopyIcon from "shared/assets/icons/copy-20-20.svg";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(style.code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={style.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={style.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});

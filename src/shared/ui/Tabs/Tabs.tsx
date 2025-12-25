import { classNames, Mods } from "shared/lib/classNames/classNames";
import style from "./Tabs.module.scss";
import { memo, ReactNode, useCallback } from "react";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TextProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TextProps) => {
    const { className, onTabClick, tabs, value } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            console.log("click");

            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(style.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    className={style.tab}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

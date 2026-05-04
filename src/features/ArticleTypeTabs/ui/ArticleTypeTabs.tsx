import { useCallback, useMemo } from "react";

import { ArticleType } from "@/entites/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { TabItem, Tabs } from "@/shared/ui/Tabs";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { value, className, onChangeType } = props;

    const typeTabs = useMemo<TabItem[]>(
        () => [
            { value: ArticleType.ALL, content: "Все статьи" },
            { value: ArticleType.ECONOMICS, content: "Экономика" },
            { value: ArticleType.IT, content: "Айти" },
            { value: ArticleType.SCIENCE, content: "Наука" },
        ],
        [],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            className={classNames("", {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        ></Tabs>
    );
};

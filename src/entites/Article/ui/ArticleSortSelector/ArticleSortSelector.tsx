import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { FC, memo, useCallback, useMemo } from "react";

import style from "./ArticleSortSelector.module.scss";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entites/Article/model/types/article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;

    const dispatch = useAppDispatch();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: "возрастанию",
            },
            {
                value: "desc",
                content: "убыванию",
            },
        ],
        [],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: "дате создания",
            },
            {
                value: ArticleSortField.TITLE,
                content: "названию",
            },
            {
                value: ArticleSortField.VIEWS,
                content: "просмотрам",
            },
        ],
        [],
    );

    return (
        <div className={style.articleSortSelector}>
            <Select
                options={sortFieldOptions}
                label={"Сортировать ПО"}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                className={style.order}
                options={orderOptions}
                label="по"
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};

export default memo(ArticleSortSelector);

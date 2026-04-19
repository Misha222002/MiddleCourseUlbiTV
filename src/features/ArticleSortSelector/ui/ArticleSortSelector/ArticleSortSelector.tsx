import { FC, memo, useMemo } from "react";

import { ArticleSortField } from "@/entites/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { SortOrder } from "@/shared/types";
import { Select, SelectOption } from "@/shared/ui/Select";

import style from "./ArticleSortSelector.module.scss";

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

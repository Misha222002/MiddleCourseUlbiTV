import { FC, memo, useCallback } from "react";

import { useSelector } from "react-redux";

import { ArticleView } from "@/entites/Article";
import {
    ArticleSortField,
    ArticleType,
} from "@/entites/Article/model/types/article";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from "@/pages/ArticlePage/model/selectors/articlesPageSelector";
import { fetchArticlesList } from "@/pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageAction } from "@/pages/ArticlePage/model/slice/articlePageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebaunce/useDebounce";
import { SortOrder } from "@/shared/types";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";

import style from "./ArticlesFilters.module.scss";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";

interface ArticlesFiltersProps {
    className?: string;
}

const ArticlesFilters: FC<ArticlesFiltersProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageAction.setVies(view));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageAction.setSort(sort));
            dispatch(articlesPageAction.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );
    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageAction.setOrder(order));
            dispatch(articlesPageAction.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageAction.setSearch(search));
            dispatch(articlesPageAction.setPage(1));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageAction.setType(value));
            dispatch(articlesPageAction.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    return (
        <div>
            <div className={style.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={style.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder="поиск"
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={style.tabs}
            />
        </div>
    );
};

export default memo(ArticlesFilters);

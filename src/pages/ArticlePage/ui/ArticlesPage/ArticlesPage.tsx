/* eslint-disable */
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticlesPage.module.scss";
import {
    Article,
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entites/Article";
import {
    DynamicModelLoader,
    ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import {
    articlePageReducer,
    articlesPageAction,
    getArticles,
} from "pages/ArticlePage/model/slice/articlePageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticlesList } from "pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "pages/ArticlePage/model/selectors/articlesPageSelector";
import Page from "widgets/Page/Page";
import { fetchNextArticlesPage } from "pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "pages/ArticlePage/model/services/initArticlesPage/initArticlesPage";
import ArticlesFilters from "../ArticlesFilters/ArticlesFilters";
import { useSearchParams } from "react-router-dom";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, []);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(style.articlesPage, {}, [className])}
            >
                <ArticlesFilters />
                {/* <ArticleViewSelector view={view} onViewClick={onChangeView} /> */}
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={style.list}
                />
            </Page>
        </DynamicModelLoader>
    );
};

export default memo(ArticlesPage);

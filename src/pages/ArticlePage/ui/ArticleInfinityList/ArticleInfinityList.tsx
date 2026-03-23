import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleInfinityList.module.scss";
import { ArticleList } from "entites/Article";
import { initArticlesPage } from "pages/ArticlePage/model/services/initArticlesPage/initArticlesPage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticles } from "pages/ArticlePage/model/slice/articlePageSlice";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "pages/ArticlePage/model/selectors/articlesPageSelector";
import { useSearchParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

interface ArticleInfinityListProps {
    className?: string;
}

export const ArticleInfinityList: FC<ArticleInfinityListProps> = (props) => {
    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
};

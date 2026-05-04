import { FC } from "react";

import { useSelector } from "react-redux";

import { ArticleList } from "@/entites/Article";

import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelector";
import { getArticles } from "../../model/slice/articlePageSlice";

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

import { HTMLAttributeAnchorTarget } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui";
import { TextSize } from "@/shared/ui/Text";

import style from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        articles,
        view = ArticleView.SMALL,
        isLoading,
        className,
        target,
    } = props;

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(style.articleList, {}, [
                    style[view.toLowerCase()],
                    className,
                ])}
            >
                <Text size={TextSize.L} title="Статьи не найдены" />
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                className={style.card}
                article={article}
                view={view}
                key={article.id}
                target={target}
            />
        );
    };

    return (
        <div
            className={classNames(style.articleList, {}, [
                className,
                style[view.toLowerCase()],
            ])}
        >
            {!isLoading && articles.length > 0 && articles.map(renderArticle)}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {!isLoading && articles.length === 0 && <div>Empty</div>}
            {isLoading && getSkeletons(view)}
        </div>
    );
};

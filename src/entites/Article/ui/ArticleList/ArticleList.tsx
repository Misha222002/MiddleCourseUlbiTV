import { Article, ArticleView } from "entites/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import style from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));
};

export const ArticleList = (props: ArticleListProps) => {
    const { articles, view = ArticleView.SMALL, isLoading, className } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(style.articleList, {}, [
                    className,
                    style[view.toLowerCase()],
                ])}
            >
                {getSkeletons(view)}
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
            {articles.length > 0 ? (
                articles.map(renderArticle)
            ) : (
                // eslint-disable-next-line i18next/no-literal-string
                <div>Empty</div>
            )}
        </div>
    );
};

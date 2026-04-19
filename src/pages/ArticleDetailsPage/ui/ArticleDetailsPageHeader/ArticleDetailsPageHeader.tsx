/* eslint-disable i18next/no-literal-string */
import { FC, useCallback } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    getRouteArticleEdit,
    getRouteArticles,
} from "@/app/providers/router/config/routeConfig";
import { getArticleDetailsData } from "@/entites/Article/model/selectors/ArticleDetails";
import { getCanEditArticle } from "@/pages/ArticleDetailsPage/model/selectors/article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui";

import style from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { className } = props;
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [navigate, article?.id]);

    return (
        <div
            className={classNames(style.articleDetailsPageHeader, {}, [
                className,
            ])}
        >
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                Назад к списку
            </Button>
            {canEdit && (
                <Button
                    className={style.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    Редактировать
                </Button>
            )}
        </div>
    );
};

export default ArticleDetailsPageHeader;

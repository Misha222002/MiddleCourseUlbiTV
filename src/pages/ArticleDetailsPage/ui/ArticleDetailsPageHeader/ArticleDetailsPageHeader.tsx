/* eslint-disable i18next/no-literal-string */
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui";

import style from "./ArticleDetailsPageHeader.module.scss";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";
import { getArticleDetailsData } from "entites/Article/model/selectors/ArticleDetails";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { className } = props;
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`);
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

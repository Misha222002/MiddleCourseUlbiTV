/* eslint-disable */
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "entites/Article";
import { useParams } from "react-router-dom";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div
                className={classNames(style.articleDetailsPage, {}, [
                    className,
                ])}
            >
                Статьи нет
            </div>
        );
    }

    return (
        <div className={classNames(style.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);

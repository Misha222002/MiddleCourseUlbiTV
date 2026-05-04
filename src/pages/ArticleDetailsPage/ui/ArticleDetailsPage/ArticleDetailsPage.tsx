/* eslint-disable */
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { ArticleDetails, ArticleList } from "@/entites/Article";
import { useNavigate, useParams } from "react-router-dom";
import {
    DynamicModelLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import Page from "@/widgets/Page/Page";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";
import ArticleDetailsPageHeader from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page
                className={classNames(style.articleDetailsPage, {}, [
                    className,
                ])}
            >
                Статьи нет
            </Page>
        );
    }

    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(style.articleDetailsPage, {}, [
                    className,
                ])}
                data-testid="ArticleDetailsPage"
            >
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModelLoader>
    );
};

export default memo(ArticleDetailsPage);

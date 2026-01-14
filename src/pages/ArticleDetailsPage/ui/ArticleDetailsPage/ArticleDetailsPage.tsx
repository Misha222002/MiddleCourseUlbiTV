/* eslint-disable */
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { ArticleDetails, ArticleList } from "entites/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonTheme, Text } from "shared/ui";
import { CommentList } from "entites/Comment";
import {
    DynamicModelLoader,
    ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from "pages/ArticleDetailsPage/model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import Page from "widgets/Page/Page";
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from "pages/ArticleDetailsPage/model/selectors/recommendations";
import { TextSize } from "shared/ui/Text/Text";
import {
    articleDetailsRecommendationsReducer,
    getArticleRecommendations,
} from "../../model/slices/articleDetailsPageRecommendationsSlice";
import { fetchArticleRecommendations } from "pages/ArticleDetailsPage/model/services/fetchArticleRecommendations.ts/fetchArticleRecommendations.ts";
import { articleDetailsReducer } from "pages/ArticleDetailsPage/model/slices";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading,
    );
    const commentsError = useSelector(getArticleCommentsError);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

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
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    Назад к списку
                </Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={style.commentTitle}
                    title="Рекомендуем"
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={style.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    className={style.commentTitle}
                    title="Комментарий"
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModelLoader>
    );
};

export default memo(ArticleDetailsPage);

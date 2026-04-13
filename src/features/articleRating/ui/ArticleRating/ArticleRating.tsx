import { FC, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Rating } from "@/entites/Rating";
import { getUserAuthData } from "@/entites/User";
import { Skeleton } from "@/shared/ui/Skeleton";

import {
    useGetArticleRatingQuery,
    useRateArticleMutation,
} from "../../api/rtkApi";

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRatingQuery({
        articleId,
        userId: userData?.id ?? "",
    });

    const [rateArticleMutation] = useRateArticleMutation();

    console.log("data", data);

    const rating = data?.[0];

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            rateArticleMutation({
                articleId,
                rate: starsCount,
                userId: userData?.id ?? "",
                feedback,
            });
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width={"100%"} height={120} />;
    }

    return (
        <Rating
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title="Оцените статью"
            feedbackTitle="Оставьте свой отзыв о статье, это поможет улучшить качество"
            hasFeedback
        ></Rating>
    );
};

export default ArticleRating;

import { RatingType } from "@/entites/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<RatingType[], GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: "/article-ratings",
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: "/article-ratings",
                method: "POST",
                body: arg,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetArticleRatingQuery, useRateArticleMutation } =
    articleRatingApi;

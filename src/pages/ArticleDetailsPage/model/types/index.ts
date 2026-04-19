import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendations";

export interface ArticlesDetailsPageSchema {
    recommendations: ArticleDetailsRecommendationsSchema;
    comments: ArticleDetailsCommentsSchema;
}

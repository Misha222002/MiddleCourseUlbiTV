import { EntityState } from "@reduxjs/toolkit";
import { Article } from "entites/Article";

export interface ArticleDetailsRecommendationsSchema
    extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
}

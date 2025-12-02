import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entites/Article";

export interface ArticlePageSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;

    //pagination
    page: number;
    limit?: number;
    hasMore: boolean;
}

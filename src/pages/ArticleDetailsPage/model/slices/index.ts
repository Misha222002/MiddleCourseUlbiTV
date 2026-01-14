import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { ArticlesDetailsPageSchema } from "../types";

export const articleDetailsReducer = combineReducers({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

import { combineReducers } from "@reduxjs/toolkit";

import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice";

export const articleDetailsReducer = combineReducers({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

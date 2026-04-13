import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";
import { Article } from "@/entites/Article";

import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations.ts/fetchArticleRecommendations.ts";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendations";

const recommendationsAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const articleDetailsRecommendationsSlice = createSlice({
    name: "articleDetailsRecommendationsSlice",
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined as string | undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("actionPayload", action.payload);

                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } =
    articleDetailsRecommendationsSlice;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";
import { Article } from "entites/Article/model/types/article";
import { fetchArticleById } from "entites/Article/model/services/fetchArticleById/fetchArticleById";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: "articleDetaild",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.data = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;

export const { reducer: articleDetailsReducer } = articleDetailsSlice;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getUserAuthData, userActions } from "entites/User";

import { getArticleDetailsData } from "entites/Article/model/selectors/ArticleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI;
    try {
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue("no data");
        }

        const response = await extra.api.post<Comment>("/comments", {
            articleId: article.id,
            userId: userData.id,
            text,
        });
        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});

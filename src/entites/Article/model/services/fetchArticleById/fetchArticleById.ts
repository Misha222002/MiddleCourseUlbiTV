import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";
export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>("articleDetails/fetchProfileData", async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        console.log("articleId", articleId);
        const response = await extra.api.get<Article>("/articles/" + articleId);

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue("error");
    }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entites/Article";

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>("articleDetailsPage/fetchArticleRecommendations", async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>("/articles", {
            params: {
                // _expand: "user",
                _limit: 4,
            },
        });

        if (!response.data) {
            throw new Error();
        }
        console.log("response.data", response.data);
        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});

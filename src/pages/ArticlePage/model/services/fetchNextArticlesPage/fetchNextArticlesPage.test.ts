import axios from "axios";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsynkThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage.test", () => {
    test("success", async () => {
        const thunk = TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
    test("fetchArticleList not called", async () => {
        const thunk = TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test("fetchArticleList not called while loading", async () => {
        const thunk = TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});

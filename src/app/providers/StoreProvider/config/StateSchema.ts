import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { ArticleDetailsSchema } from "@/entites/Article";
import { CounterSchema } from "@/entites/Counter";
import { OptionalRecord } from "@/entites/Counter/model/types/CounterSchema";
import { UserSchema } from "@/entites/User";
import { AddCommentFormSchema } from "@/features/addCommentForm";
import { LoginSchema } from "@/features/AuthByUsername";
import { ProfileSchema } from "@/features/editableProfileCard";
import { SaveScrollSchema } from "@/features/saveScroll";
import { ArticlesDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { ArticlePageSchema } from "@/pages/ArticlePage";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
    counter: CounterSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    user: UserSchema;
    saveScroll: SaveScrollSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlePageSchema;
    articleDetailsPage?: ArticlesDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

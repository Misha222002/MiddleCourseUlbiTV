import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export const getSaveScroll = (state: StateSchema) => state.saveScroll.scroll;
export const getSaveScrollByPath = (path: string) =>
    createSelector(getSaveScroll, (scroll) => scroll[path] || 0);

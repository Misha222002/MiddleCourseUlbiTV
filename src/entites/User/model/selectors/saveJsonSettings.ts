import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";

import { JsonSettings } from "../types/jsonSettings";
import { getUserAuthData } from "./getUserAuthData/getUserAuthData";
import { getJsonSettings } from "./jsonSettings";
import { setJsonSettingsMutations } from "../../api/userApi";

export const SaveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>("user/SaveJsonSettings", async (newJsonSettings, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue("not correct user data");
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutations({
                userId: userData.id,
                jsonSettings: { ...currentSettings, ...newJsonSettings },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue("empty response json settings");
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue("Failed to save json settings");
    }
});

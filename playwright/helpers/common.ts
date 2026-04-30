// tests/helpers/common.ts
import type { Page, APIRequestContext } from "@playwright/test";

import { User } from "../../src/entites/User";
import { USER_LOCALSTORAGE_KEY } from "../../src/shared/const/localstorage";

export class CommonCommands {
    constructor(
        private page: Page,
        private request?: APIRequestContext,
    ) {}

    async login(
        username: string = "testuser",
        password: string = "123",
    ): Promise<User> {
        await this.page.goto("http://localhost:7000");
        // Используем API request для логина
        const response = await this.request!.post(
            "http://localhost:8000/login",
            {
                data: { username, password },
            },
        );

        const body = (await response.json()) as User;

        // Сохраняем в localStorage
        await this.page.evaluate(
            ({ data, key }) => {
                localStorage.setItem(key, JSON.stringify(data));
            },
            { data: body, key: USER_LOCALSTORAGE_KEY },
        );

        return body;
    }

    async getLocalStorageItem(key: string) {
        return await this.page.evaluate((k) => localStorage.getItem(k), key);
    }

    async getLocalStorageItemParsed<T>(key: string): Promise<T | null> {
        const value = await this.getLocalStorageItem(key);
        return value ? JSON.parse(value) : null;
    }

    async setLocalStorageItem(key: string, value: any) {
        await this.page.evaluate(
            ([k, v]) => {
                localStorage.setItem(
                    k,
                    typeof v === "string" ? v : JSON.stringify(v),
                );
            },
            [key, value],
        );
    }
}

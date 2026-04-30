import { test as setup } from "@playwright/test";

import { USER_LOCALSTORAGE_KEY } from "../src/shared/const/localstorage";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page, request }) => {
    await page.goto("http://localhost:7000");
    // Отправляем API запрос на логин
    const response = await request.post("http://localhost:8000/login", {
        data: {
            username: "testuser",
            password: "123",
        },
    });

    const body = await response.json();

    await page.evaluate(
        ({ data, key }) => {
            localStorage.setItem(key, JSON.stringify(data));
        },
        { data: body, key: USER_LOCALSTORAGE_KEY },
    );

    // Сохраняем состояние (cookies, localStorage, sessionStorage)
    await page.context().storageState({ path: authFile });
});

import { test, expect } from "@playwright/test";

test.describe("Роутинг", () => {
    test.describe("Пользователь НЕ авторизован", () => {
        test.use({ storageState: { cookies: [], origins: [] } });

        test("Переход на главную страницу", async ({ page }) => {
            await page.goto("/");
            // await expect(page).toHaveTitle(/Playwright/);
            const mainPageElement = page.getByTestId("MainPage");
            await expect(mainPageElement).toBeVisible();
        });

        test("Переход открывает страницу пользователя", async ({ page }) => {
            await page.goto("/profile/1");
            // await expect(page).toHaveTitle(/Playwright/);
            const mainPageElement = page.getByTestId("MainPage");
            await expect(mainPageElement).toBeVisible();
        });

        test("Переход открывает несуществующий маршрут", async ({ page }) => {
            await page.goto("/fsgfdsg");
            // await expect(page).toHaveTitle(/Playwright/);
            const notFountPageElement = page.getByTestId("NotFoundPage");
            await expect(notFountPageElement).toBeVisible();
        });
    });

    test.describe("Пользователь авторизован", () => {
        test.use({ storageState: "playwright/.auth/user.json" });
        test("Переход открывает страницу пользователя", async ({ page }) => {
            await page.goto("/profile/1");
            const profilePageElement = page.getByTestId("ProfilePage");
            await expect(profilePageElement).toBeVisible();
        });
        test("Переход открывает страницу статей", async ({ page }) => {
            await page.goto("/articles");
            const acticlesPageElement = page.getByTestId("ArticlesPage");
            await expect(acticlesPageElement).toBeVisible();
        });
    });
});

import { test, expect } from "../../playwright/fixtures";
import articles from "../../playwright/fixtures/articles.json" assert { type: "json" };

test.describe("Пользователь заходит на страницу со списком статей", () => {
    test.beforeEach(async ({ page, common }) => {
        await common.login();
        await page.goto("/articles");
    });
    test("статьи успешно подгружаются", async ({ page }) => {
        await expect(page.getByTestId("ArticleList")).toBeVisible();
        await expect(async () => {
            const count = await page.getByTestId("ArticleListItem").count();
            expect(count).toBeGreaterThan(5);
        }).toPass();
    });

    test("На стабах (фикстурах)", async ({ page }) => {
        await page.route("**/articles?*", async (route) => {
            await route.fulfill({
                json: articles,
            });
        });
        await expect(page.getByTestId("ArticleList")).toBeVisible();
        await expect(async () => {
            const count = await page.getByTestId("ArticleListItem").count();
            expect(count).toBeGreaterThan(5);
        }).toPass();
    });
});

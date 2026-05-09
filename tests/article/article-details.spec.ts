import { test, expect } from "../../playwright/fixtures";
import articleDetails from "../../playwright/fixtures/article-details.json" assert { type: "json" };

let articleId = "";

test.describe("Пользователь заходит на страницу статьи", () => {
    test.beforeEach(async ({ page, common, article }) => {
        await common.login();
        const newArticle = await article.createArticle();
        articleId = newArticle.id;
        await page.goto(`/articles/${articleId}`);
    });

    test.afterEach(async ({ page, common, article }) => {
        await article.removeArticle(articleId);
        articleId = "";
    });

    test("статья успешно загрузилась", async ({ page }) => {
        await expect(page.getByTestId("ArticleDetailsPage")).toBeVisible();
    });

    test("и список рекоммендаций загрузился", async ({ page }) => {
        await expect(
            page.getByTestId("ArticleRecommendationsList"),
        ).toBeVisible();
    });

    test("и оставляем комментарий", async ({ page, comments }) => {
        await expect(page.getByTestId("ArticleDetailsPage")).toBeVisible();
        await page.getByTestId("AddCommentForm").scrollIntoViewIfNeeded();
        comments.createComment("testComment");
        await expect(page.getByTestId("CommentCard.Content")).toBeVisible();

        await expect(async () => {
            const count = await page.getByTestId("CommentCard.Content").count();
            expect(count).toBe(1);
        }).toPass();
    });

    test("и ставим оценку", async ({ page, comments, rating }) => {
        await page.route("**/articles/*", async (route) => {
            await route.fulfill({
                json: articleDetails,
            });
        });

        await expect(page.getByTestId("ArticleDetailsPage")).toBeVisible();
        await page.getByTestId("RatingCard").scrollIntoViewIfNeeded();

        rating.setRate(4, "feedback");

        await expect(page.locator('[data-selected="true"]')).toHaveCount(4);
    });
});

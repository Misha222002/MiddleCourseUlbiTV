import { test, expect } from "../../playwright/fixtures";

let profileId = "";

test.describe("Пользователь заходит на страницу профиля", () => {
    test.beforeEach(async ({ page, common }) => {
        await page.goto("/");

        const user = await common.login();
        profileId = user.id;

        await page.goto(`/profile/${profileId}`);
    });

    test.afterEach(async ({ profile }) => {
        await profile.resetProfile(profileId);
    });

    test("И профиль успешно загружается", async ({ common, page }) => {
        await expect(page.getByTestId("ProfileCard.firstname")).toHaveValue(
            "test",
        );
    });

    test("И редактирует его", async ({ profile, common, page }) => {
        const newName = "new";
        const newLastname = "lastname";

        await expect(page.getByTestId("ProfileCard.firstname")).toHaveValue(
            "test",
        );

        await profile.updateProfile(newName, newLastname);

        await expect(page.getByTestId("ProfileCard.firstname")).toHaveValue(
            newName,
        );
        await expect(page.getByTestId("ProfileCard.lastname")).toHaveValue(
            newLastname,
        );
    });
});

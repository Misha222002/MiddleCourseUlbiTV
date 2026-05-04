import { test as base } from "@playwright/test";

import { ArticleCommands } from "./helpers/article";
import { CommentsCommands } from "./helpers/comment";
import { CommonCommands } from "./helpers/common";
import { ProfileCommands } from "./helpers/profile";
import { RatingCommands } from "./helpers/rating";

// export * from "@playwright/test";

// Расширяем типы
type MyFixtures = {
    common: CommonCommands;
    profile: ProfileCommands;
    article: ArticleCommands;
    comments: CommentsCommands;
    rating: RatingCommands;
};

// Создаем кастомный test с фикстурами
export const test = base.extend<MyFixtures>({
    common: async ({ page, request }, runFixture) => {
        const common = new CommonCommands(page, request);
        await runFixture(common);
    },
    profile: async ({ page, request }, runFixture) => {
        const profile = new ProfileCommands(page, request);
        await runFixture(profile);
    },
    article: async ({ page, request }, runFixture) => {
        const article = new ArticleCommands(page, request);
        await runFixture(article);
    },
    comments: async ({ page, request }, runFixture) => {
        const comment = new CommentsCommands(page, request);
        await runFixture(comment);
    },
    rating: async ({ page, request }, runFixture) => {
        const comment = new RatingCommands(page, request);
        await runFixture(comment);
    },
});

export { expect } from "@playwright/test";

import { test as base } from "@playwright/test";

import { CommonCommands } from "./helpers/common";
import { ProfileCommands } from "./helpers/profile";

// export * from "@playwright/test";

// Расширяем типы
type MyFixtures = {
    common: CommonCommands;
    profile: ProfileCommands;
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
});

export { expect } from "@playwright/test";

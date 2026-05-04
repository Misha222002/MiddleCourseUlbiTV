// tests/helpers/common.ts
import type { Page, APIRequestContext } from "@playwright/test";

export class RatingCommands {
    constructor(
        private page: Page,
        private request?: APIRequestContext,
    ) {}

    async setRate(starsCount: number = 5, feedback: string = "feedback") {
        this.page.getByTestId("StarRating." + starsCount).click();
        this.page.getByTestId("Rating.Input").fill(feedback);
        this.page.getByTestId("Rating.Send").click();
    }
}

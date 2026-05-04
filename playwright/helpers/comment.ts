// tests/helpers/common.ts
import type { Page, APIRequestContext } from "@playwright/test";

export class CommentsCommands {
    constructor(
        private page: Page,
        private request?: APIRequestContext,
    ) {}

    async createComment(text: string) {
        this.page.getByTestId("AddCommentForm.Input").fill(text);
        this.page.getByTestId("AddCommentForm.Button").click();
    }
}

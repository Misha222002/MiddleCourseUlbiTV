// tests/helpers/common.ts
import type { Page, APIRequestContext } from "@playwright/test";

import { Article } from "../../src/entites/Article";

const defaultArticle = {
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    userId: "1",
    type: ["IT"],
    blocks: [],
};
export class ArticleCommands {
    constructor(
        private page: Page,
        private request?: APIRequestContext,
    ) {}

    async createArticle(article?: Article): Promise<Article> {
        const response = await this.request!.post(
            "http://localhost:8000/articles",
            {
                headers: { Authorization: "safsa" },
                data: article ?? defaultArticle,
            },
        );

        const body = (await response.json()) as Article;

        return body;
    }

    async removeArticle(articleId?: string): Promise<void> {
        await this.request!.delete(
            `http://localhost:8000/articles/${articleId}`,
            {
                headers: { Authorization: "safsa" },
            },
        );
    }
}

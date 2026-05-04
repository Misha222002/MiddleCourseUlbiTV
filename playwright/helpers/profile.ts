import type { Page, APIRequestContext } from "@playwright/test";

export class ProfileCommands {
    constructor(
        private page: Page,
        private request?: APIRequestContext,
    ) {}

    async resetProfile(profileId: string) {
        // Пример для API сброса профиля
        await this.request!.put(`http://localhost:8000/profile/${profileId}`, {
            headers: { Authorization: "somethig" },
            data: {
                id: "3",
                first: "test",
                lastname: "user",
                age: 465,
                currency: "RUB",
                country: "Russia",
                city: "Moscow",
                username: "testuser",
                avatar: "https://www.shkolazhizni.ru/img/content/i156/156707_or.jpg",
            },
        });
    }

    async updateProfile(firstname: string, lastname: string) {
        // Заполняем поля
        await this.page.getByTestId("ProfilePageHeader.EditButton").click();
        await this.page.getByTestId("ProfileCard.firstname").fill(firstname);
        await this.page.getByTestId("ProfileCard.lastname").fill(lastname);

        // Сохраняем изменения
        await this.page.getByTestId("ProfilePageHeader.SaveButton").click();
    }

    // async getProfileId(): Promise<string> {
    //     const profileData = await this.getLocalStorageItemParsed("profile");
    //     return profileData?.id;
    // }
}

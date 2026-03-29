import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/test/ComponentRender/ComponentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "entites/Profile";
import { Currency } from "entites/Currency";
import { Country } from "entites/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { $api } from "shared/api/api";

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 465,
    currency: Currency.USD,
    country: Country.Kazahstan,
    city: "Moskow",
    username: "admin123",
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: "1", username: "admin" },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe("features/EditableProfileCard", () => {
    test("Режим рид онли должен переключится", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options);
        await userEvent.click(
            screen.getByTestId("ProfilePageHeader.EditButton"),
        );

        expect(
            screen.getByTestId("ProfilePageHeader.CancelButton"),
        ).toBeInTheDocument();
    });

    test("При отмене значения должны обнуляться", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options);
        await userEvent.click(
            screen.getByTestId("ProfilePageHeader.EditButton"),
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

        await userEvent.type(
            screen.getByTestId("ProfileCard.lastname"),
            "user",
        );
        await userEvent.type(
            screen.getByTestId("ProfileCard.firstname"),
            "user",
        );

        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");
        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");

        await userEvent.click(
            screen.getByTestId("ProfilePageHeader.CancelButton"),
        );

        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue(
            "admin",
        );
    });

    test("Должна появляться ошибка", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options);
        await userEvent.click(
            screen.getByTestId("ProfilePageHeader.EditButton"),
        );
        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

        await userEvent.click(
            screen.getByTestId("ProfilePageHeader.SaveButton"),
        );

        expect(
            screen.getByTestId("EditableProfileCard.Error.Paragraph"),
        ).toBeInTheDocument();
    });

    test("Если нет ошибок валидаци, то на сервер должен уйти PUT запрос", async () => {
        const mockPutReq = jest.spyOn($api, "put");

        componentRender(<EditableProfileCard id={"1"} />, options);
        await userEvent.click(
            screen.getByTestId("ProfilePageHeader.EditButton"),
        );
        await userEvent.type(
            screen.getByTestId("ProfileCard.firstname"),
            "user",
        );

        await userEvent.click(
            screen.getByTestId("ProfilePageHeader.SaveButton"),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});

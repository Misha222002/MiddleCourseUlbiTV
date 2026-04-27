import { componentRender } from "@/shared/lib/test/ComponentRender/ComponentRender";
import { screen } from "@testing-library/react";
import AppRouter from "./AppRouter";
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from "../config/routeConfig";
import { UserRole } from "@/entites/User";

describe("app/router/AppRouter", () => {
    test("Страница должна отрендериться", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    });

    test("Страница должна отрендериться", async () => {
        componentRender(<AppRouter />, {
            route: "/asfasd",
        });

        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    });

    test("Редирект неавтаризованного пользователя на главную страницу", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
        });

        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ к закрытой странице для авторизованного пользователя", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),

            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ запрещен(отсутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),

            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId("ForbiddenPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ разрешен(отсутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),

            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId("AdminPanelPage");
        expect(page).toBeInTheDocument();
    });
});

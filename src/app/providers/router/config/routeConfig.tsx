import { RouteProps } from "react-router-dom";

import { UserRole } from "@/entites/User";
import { AboutPage } from "@/pages/AboutPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { ArticlesPage } from "@/pages/ArticlePage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_EDIT = "article_edit",
    ARTICLE_CREATE = "article_create",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // +:id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.FORBIDDEN]: "/forbidden",
    //last
    [AppRoutes.NOT_FOUND]: "*",
};

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => "/articles";
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => "/articles/new";
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => "/admin";
export const getRouteForbidden = () => "/forbidden";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },

    [AppRoutes.PROFILE]: {
        path: getRouteProfile(":id"),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(":id"),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(":id"),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },

    //last
    [AppRoutes.NOT_FOUND]: {
        path: "*",
        element: <NotFoundPage />,
    },
};

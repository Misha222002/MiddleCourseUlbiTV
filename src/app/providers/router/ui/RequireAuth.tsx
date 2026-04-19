import { ReactNode, useMemo } from "react";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import {
    getRouteForbidden,
    getRouteMain,
} from "@/app/providers/router/config/routeConfig";
import { getUserAuthData, UserRole } from "@/entites/User";
import { getUserRoles } from "@/entites/User/model/selectors/roleSelector";

interface RequireAuthProps {
    children: ReactNode;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    console.log("authData", auth);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requiredRole) => {
            return userRoles?.includes(requiredRole);
        });
    }, [roles, userRoles]);

    console.log("hasRequiredRoles", hasRequiredRoles);

    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}

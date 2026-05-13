import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";
import { useJsonSettings } from "./model/selectors/jsonSettings";
import {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from "./model/selectors/roleSelector";
import { SaveJsonSettings } from "./model/selectors/saveJsonSettings";
import { userActions, userReducer } from "./model/slice/userSlice";
import type { User, UserSchema } from "./model/types/user";
import { UserRole } from "./model/types/user";

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
    getUserInited,
    getUserRoles,
    isUserAdmin,
    isUserManager,
    UserRole,
    SaveJsonSettings,
    useJsonSettings,
};

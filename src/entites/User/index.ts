import type { User, UserSchema } from "./model/types/user";
import { userActions, userReducer } from "./model/slice/userSlice";

export { userReducer, userActions, User, UserSchema };

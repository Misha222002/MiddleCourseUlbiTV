import { CounterSchema } from "entites/Counter";
import { UserSchema } from "entites/User";
import { loginSchema } from "features/AuthByUsername";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: loginSchema;
}

// export { profileActions, profileReducer } from "./modal/slice/ProfileSlice";

import { profileActions, profileReducer } from "./modal/slice/profileSlice";
import type { Profile, ProfileSchema } from "./modal/types/profile";

// export type { Profile, ProfileSchema } from "./modal/types/profile";

export { profileReducer, ProfileSchema, Profile, profileActions };
export { fetchProfileData } from "./modal/services/fetchProfileData/fetchProfileData";

export { ProfileCard } from "entites/Profile/ui/ProfileCard/ProfileCard";

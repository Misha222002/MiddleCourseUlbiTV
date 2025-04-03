// export { profileActions, profileReducer } from "./modal/slice/ProfileSlice";

import { profileActions, profileReducer } from "./modal/slice/profileSlice";
import type { Profile, ProfileSchema } from "./modal/types/profile";

// export type { Profile, ProfileSchema } from "./modal/types/profile";

export { profileReducer, ProfileSchema, Profile, profileActions };
export { fetchProfileData } from "./modal/services/fetchProfileData/fetchProfileData";

export { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export { getProfileLoading } from "./modal/selectors/getProfileLoading/getProfileLoading";
export { getProfileData } from "./modal/selectors/getProfileData/getProfileData";
export { getProfileError } from "./modal/selectors/getProfileError/getProfileError";

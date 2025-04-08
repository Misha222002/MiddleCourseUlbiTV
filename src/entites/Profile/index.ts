import { profileActions, profileReducer } from "./modal/slice/profileSlice";
import type { Profile, ProfileSchema } from "./modal/types/profile";

// export type { Profile, ProfileSchema } from "./modal/types/profile";

export { profileReducer, ProfileSchema, Profile, profileActions };
export { fetchProfileData } from "./modal/services/fetchProfileData/fetchProfileData";
export { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export { updateProfileData } from "./modal/services/updateProfileData/updateProfileData";

export { getProfileLoading } from "./modal/selectors/getProfileLoading/getProfileLoading";
export { getProfileData } from "./modal/selectors/getProfileData/getProfileData";
export { getProfileError } from "./modal/selectors/getProfileError/getProfileError";
export { getProfileReadonly } from "./modal/selectors/getProfileReadonly/getProfileReadonly";
export { ProfilePageHeader } from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
export { getProfileForm } from "./modal/selectors/getProfileForm/getProfileForm";
export { getProfileValidateErrors } from "./modal/selectors/getProfileValidateError/getProfileValidateError";

import { logOutBtn, registerNewAvatarBtn } from "./constants/constants.mjs";
import { checkIfUserIsLoggedIN } from "./functions/checkIfUserLoggedIn.mjs";
import { logoutUser } from "./functions/logout.mjs";
import { changeAvatar } from "./functions/changeAvatar.mjs";

//function checking if user is logged in
checkIfUserIsLoggedIN();

//Function for logging out user
logOutBtn.addEventListener("click", logoutUser);

//eventlistener for changing avatar
registerNewAvatarBtn.addEventListener("click", changeAvatar);

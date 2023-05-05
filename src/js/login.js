import {
  registerNameInput,
  registerPasswordInput,
  registerUsernameInput,
  registerUserBtn,
  loginUserBtn,
  logOutBtn,
  registerNewAvatarBtn,
} from "./constants/constants.mjs";
import { registerUser } from "./functions/createUser.mjs";
import { validateUserInput } from "./functions/validateUserInput.js";
import { loginUser } from "./functions/loginUser.mjs";
import { checkIfUserIsLoggedIN } from "./functions/checkIfUserLoggedIn.mjs";
import { logoutUser } from "./functions/logout.mjs";
import { changeAvatar } from "./functions/changeAvatar.mjs";
import { searchListings } from "./functions/getListings.mjs";

//Eventlistener for POSTING the registered info. Button is enabled when validation passses
registerUserBtn.addEventListener("click", registerUser);

//Eventlisteners for inputs when user is being registered
registerNameInput.addEventListener("keyup", validateUserInput);
registerPasswordInput.addEventListener("keyup", validateUserInput);
registerUsernameInput.addEventListener("keyup", validateUserInput);

//eventlistener for signing in user
loginUserBtn.addEventListener("click", loginUser);

//function checking if user is logged in
checkIfUserIsLoggedIN();

//Function for logging out user
logOutBtn.addEventListener("click", logoutUser);

//eventlistener for changing avatar
registerNewAvatarBtn.addEventListener("click", changeAvatar);

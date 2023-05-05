import {
  registerNameInput,
  registerPasswordInput,
  registerUsernameInput,
  registerUserBtn,
  loginUserBtn,
  logOutBtn,
  registerNewAvatarBtn,
  searchInput,
  searchBtn,
} from "./constants/constants.mjs";
import { registerUser } from "./functions/createUser.mjs";
import { validateUserInput } from "./functions/validateUserInput.js";
import { loginUser } from "./functions/loginUser.mjs";
import { checkIfUserIsLoggedIN } from "./functions/checkIfUserLoggedIn.mjs";
import { logoutUser } from "./functions/logout.mjs";
import { changeAvatar } from "./functions/changeAvatar.mjs";
import { searchSubmitBtnEnabler } from "./functions/getListings.mjs";
import { enableSearchParams } from "./functions/searchParams.mjs";
import { preventSearchDefault } from "./functions/preventSearchDefault.mjs";

//Eventlistener for POSTING the registered info. Button is enabled when validation passses
registerUserBtn.addEventListener("click", registerUser);

//Eventlisteners for inputs when user is being registered
registerNameInput.addEventListener("keyup", validateUserInput);
registerPasswordInput.addEventListener("keyup", validateUserInput);
registerUsernameInput.addEventListener("keyup", validateUserInput);

//for search
searchBtn.addEventListener("click", enableSearchParams);
searchInput.addEventListener("keyup", searchSubmitBtnEnabler);
searchInput.addEventListener("keydown", preventSearchDefault);

//eventlistener for signing in user
loginUserBtn.addEventListener("click", loginUser);

//function checking if user is logged in
checkIfUserIsLoggedIN();

//Function for logging out user
logOutBtn.addEventListener("click", logoutUser);

//eventlistener for changing avatar
registerNewAvatarBtn.addEventListener("click", changeAvatar);

import {
  registerNameInput,
  registerPasswordInput,
  registerUsernameInput,
  registerUserBtn,
  loginUserBtn,
} from "./constants/constants.mjs";
import { registerUser } from "./functions/createUser.mjs";
import { validateUserInput } from "./functions/validateUserInput.js";
import { loginUser } from "./functions/loginUser.mjs";

//Eventlistener for POSTING the registered info. Button is enabled when validation passses
registerUserBtn.addEventListener("click", registerUser);

//Eventlisteners for inputs when user is being registered
registerNameInput.addEventListener("keyup", validateUserInput);
registerPasswordInput.addEventListener("keyup", validateUserInput);
registerUsernameInput.addEventListener("keyup", validateUserInput);

//eventlistener for signing in user
loginUserBtn.addEventListener("click", loginUser);

import {
  registerNameInput,
  registerPasswordInput,
  registerUsernameInput,
  registerUserBtn,
} from "./constants/constants.mjs";
import { registerUser } from "./functions/createUser.mjs";
import { validateUserInput } from "./functions/validateUserInput.js";

//Eventlistener for POSTING the registered info. Button is enabled when validation passses
registerUserBtn.addEventListener("click", registerUser);

//Eventlisteners for inputs when user is being registered
registerNameInput.addEventListener("keyup", validateUserInput);
registerPasswordInput.addEventListener("keyup", validateUserInput);
registerUsernameInput.addEventListener("keyup", validateUserInput);

import { registerUserBtn } from "./constants/constants.mjs";
import { registerUser } from "./functions/createUser.mjs";

registerUserBtn.addEventListener("click", registerUser);

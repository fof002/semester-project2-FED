import {
  registerPasswordInput,
  registerPasswordHelp,
  registerUsernameInput,
  registerEmailHelp,
  registerNameInput,
  registerNameHelp,
  registerUserBtn,
  specialCharacters,
  symbolEmail,
  symbolName,
  symbolPassword,
  errorContainer,
} from "../constants/constants.mjs";
/**
 * Function for getting userinput for registering user and validates input
 */
export function validateUserInput() {
  errorContainer.style.display = "none";
  if (registerNameInput.value.length > 0) {
    registerNameHelp.style.display = "block";
    if (
      !specialCharacters.test(registerNameInput.value) &&
      registerNameInput.value.length > 3
    ) {
      symbolName.classList.remove("fa-circle-exclamation");
      symbolName.classList.add("fa-circle-check");
    } else {
      symbolName.classList.remove("fa-circle-check");
      symbolName.classList.add("fa-circle-exclamation");
    }
  }
  if (registerPasswordInput.value.length > 0) {
    registerPasswordHelp.style.display = "block";
    if (registerPasswordInput.value.length > 7) {
      symbolPassword.classList.remove("fa-circle-exclamation");
      symbolPassword.classList.add("fa-circle-check");
    } else {
      symbolPassword.classList.remove("fa-circle-check");
      symbolPassword.classList.add("fa-circle-exclamation");
    }
  }
  if (registerUsernameInput.value.length > 0) {
    registerEmailHelp.style.display = "block";
    if (registerUsernameInput.value.endsWith("@stud.noroff.no")) {
      symbolEmail.classList.remove("fa-circle-exclamation");
      symbolEmail.classList.add("fa-circle-check");
    } else {
      symbolEmail.classList.remove("fa-circle-check");
      symbolEmail.classList.add("fa-circle-exclamation");
    }
  }
  if (
    !specialCharacters.test(registerNameInput.value) &&
    registerNameInput.value.length > 3 &&
    registerPasswordInput.value.length > 7 &&
    registerUsernameInput.value.endsWith("@stud.noroff.no")
  ) {
    registerUserBtn.disabled = false;
  } else {
    registerUserBtn.disabled = true;
  }
}

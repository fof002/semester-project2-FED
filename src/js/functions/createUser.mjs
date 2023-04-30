import { url } from "../BASE_URL.mjs";
import {
  registerPasswordInput,
  registerUsernameInput,
  registerNameInput,
  registerAvatarInput,
  errorContainer,
  registerUserModal,
  userCreatedModal,
} from "../constants/constants.mjs";

const registerUserUrl = url + "register";
let userInput = {};

/**
 * Function for registering user
 */

export async function registerUser() {
  userInput = {
    name: registerNameInput.value,
    email: registerUsernameInput.value, // Required
    password: registerPasswordInput.value, // Required
    avatar: registerAvatarInput.value,
  };
  fetch(registerUserUrl, {
    method: "POST",
    body: JSON.stringify(userInput),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        errorContainer.style.display = "block";
        errorContainer.innerHTML = `<li>${json.errors[0].message}</li>`;
      } else {
        registerUserModal.hide();
        userCreatedModal.show();
      }
    });
}

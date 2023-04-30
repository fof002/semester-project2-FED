import { url } from "../BASE_URL.mjs";
import {
  registerPasswordInput,
  registerUsernameInput,
  registerNameInput,
  registerAvatarInput,
  userCreatedModal,
  registerUserModal,
} from "../constants/constants.mjs";

const registerUserUrl = url + "register";
let userInput = {};

export async function registerUser() {
  getUserInput();
  fetch(registerUserUrl, {
    method: "POST",
    body: JSON.stringify(userInput),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  registerUserModal.hide();
  userCreatedModal.show();
}

const getUserInput = () => {
  userInput = {
    name: registerNameInput.value,
    email: registerUsernameInput.value, // Required
    password: registerPasswordInput.value, // Required
    avatar: registerAvatarInput.value,
  };
};

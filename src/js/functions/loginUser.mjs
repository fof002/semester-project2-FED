import {
  loginInputEmail,
  loginInputPassword,
} from "../constants/constants.mjs";
import { url } from "../BASE_URL.mjs";

const loginUserUrl = url + "login";
let loginInput = {};

export async function loginUser(event) {
  event.preventDefault();
  console.log(loginInputEmail.value.trim() + loginInputPassword.value.trim());
  loginInput = {
    email: loginInputEmail.value.trim(),
    password: loginInputPassword.value.trim(),
  };
  fetch(loginUserUrl, {
    method: "POST",
    body: JSON.stringify(loginInput),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      localStorage.setItem("accesstoken", json.accessToken);
      localStorage.setItem("email", json.email);
      localStorage.setItem("name", json.name);
      localStorage.setItem("credits", json.credits);
      localStorage.setItem("avatar", json.avatar);
    });
}

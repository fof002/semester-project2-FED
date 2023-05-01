import {
  loginInputEmail,
  loginInputPassword,
} from "../constants/constants.mjs";
import { url } from "../BASE_URL.mjs";

const loginUserUrl = url + "auth/login";
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
      const { accessToken, name, email, credits, avatar } = json;
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          accesstoken: accessToken,
          email: email,
          name: name,
          credits: credits,
          avatar: avatar,
        })
      );
      location.assign("login.html");
    });
}

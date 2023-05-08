import {
  loginInputEmail,
  loginInputPassword,
  errorContainerLogin,
} from "../constants/constants.mjs";
import { url } from "../BASE_URL.mjs";

const loginUserUrl = url + "auth/login?";
let loginInput = {};

/**
 * Function for loging in user
 * @param {event} event
 */

export async function loginUser(event) {
  try {
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
        if (json.errors) {
          errorContainerLogin.style.display = "block";
          errorContainerLogin.innerHTML = `<li>${json.errors[0].message}</li>`;
        } else {
          const { accessToken, name } = json;
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              accesstoken: accessToken,
              name: name,
            })
          );
          location.assign("index.html");
        }
      });
  } catch (error) {}
}

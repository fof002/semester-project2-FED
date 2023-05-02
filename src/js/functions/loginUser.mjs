import {
  loginInputEmail,
  loginInputPassword,
  errorContainerLogin,
} from "../constants/constants.mjs";
import { url } from "../BASE_URL.mjs";

const loginUserUrl = url + "auth/login";
let loginInput = {};

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
        if (json.errors) {
          errorContainerLogin.style.display = "block";
          errorContainerLogin.innerHTML = `<li>${json.errors[0].message}</li>`;
        } else {
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
          location.assign("index.html");
        }
      });
  } catch (error) {}
}
//test user bernt2025@stud.noroff.no bernt2023

import { url } from "../BASE_URL.mjs";
import {
  newAvatarUrlInput,
  errorContainerAvatar,
  successContainerAvatar,
} from "../constants/constants.mjs";
import { checkIfUserIsLoggedIN } from "./checkIfUserLoggedIn.mjs";

/**
 * FUnction for changing the avatar of the user
 */

export async function changeAvatar() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { name, accesstoken } = userInfo;
  const changeAvatarUrl = url + "profiles/" + name + "/media";
  try {
    fetch(changeAvatarUrl, {
      method: "PUT",
      body: JSON.stringify({
        avatar: newAvatarUrlInput.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.errors) {
          successContainerAvatar.style.display = "none";
          errorContainerAvatar.style.display = "block";
          errorContainerAvatar.innerHTML = `<li>${json.errors[0].message}</li>`;
        } else {
          checkIfUserIsLoggedIN();
          successContainerAvatar.style.display = "block";
        }
      });
  } catch (error) {
    errorContainerAvatar.style.display = "block";
    errorContainerAvatar.innerHTML = `<li>${error}</li>`;
  }
}

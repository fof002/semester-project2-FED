import { errorMessage } from "../constants/constants.mjs";
import {
  userContainerNav,
  creditsContainer,
  viewListingsUser,
} from "../constants/constants.mjs";

/**
 * Function for updating userinfo in navbra when reloading page
 * @param {string} profileUrl - url of the profile to get from the API
 * @param {string} accesstoken - the accesstoken from local storage
 */

export async function getUserProfile(profileUrl, accesstoken) {
  try {
    fetch(profileUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
      .then((response) => response.json())
      .then((profile) => {
        if (profile.errors) {
          console.log(profile.errors);
        } else {
          const { name, credits, avatar } = profile;
          userContainerNav.innerHTML = `${name} <img
                id="avatarImage"
                src=""
                alt="Users avatar"
                onerror="this.onerror=null; this.src='img/circle-user-regular.svg'"
                class="object-fit-contain opacity-75 rounded-circle"
                height="20"
                width="20"
              />`;
          creditsContainer.innerHTML = `Credits: <span class="font-weight-light">${credits}</span>`;
          userContainerNav.href = "#";
          userContainerNav.dataset.bsToggle = "dropdown";
          viewListingsUser.href = `index.html?username=${name}`;
          if (avatar) {
            avatarImage.src = avatar;
          }
        }
      });
  } catch {
    console.log(errorMessage);
  }
}

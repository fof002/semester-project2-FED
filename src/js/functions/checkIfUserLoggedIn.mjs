import { userContainerNav, creditsContainer } from "../constants/constants.mjs";

export function checkIfUserIsLoggedIN() {
  if (JSON.parse(localStorage.getItem("userInfo"))) {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const { name, credits, accesstoken, avatar } = userData;
    if (accesstoken) {
      userContainerNav.innerHTML = name;
      creditsContainer.innerHTML = `Credits: <span class="font-weight-light">${credits}</span>`;
      userContainerNav.href = "#";
      userContainerNav.dataset.bsToggle = "dropdown";
    }
    if (avatar) {
      avatarImage.src = avatar;
    }
  } else {
    userContainerNav.innerHTML = "Sign In";
  }
}

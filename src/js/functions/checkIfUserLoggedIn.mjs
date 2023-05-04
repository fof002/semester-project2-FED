import { userContainerNav, creditsContainer } from "../constants/constants.mjs";

export function checkIfUserIsLoggedIN() {
  if (JSON.parse(localStorage.getItem("userInfo"))) {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const { name, credits, accesstoken, avatar } = userData;
    if (accesstoken) {
      userContainerNav.innerHTML = `${name} <img
      id="avatarImage"
      src=""
      alt="Users avatar"
      onerror="this.onerror=null; this.src='img/image-regular.svg'"
      class="object-fit-contain opacity-75 rounded-circle"
      height="20"
      width="20"
    />`;
      creditsContainer.innerHTML = `Credits: <span class="font-weight-light">${credits}</span>`;
      userContainerNav.href = "#";
      userContainerNav.dataset.bsToggle = "dropdown";
      if (avatar) {
        avatarImage.src = avatar;
      }
      //location.assign("index.html"); legges til når index er oppe og går
    }
  } else {
    userContainerNav.innerHTML = "Sign In";
  }
}

import { userContainerNav } from "../constants/constants.mjs";
import { url } from "../BASE_URL.mjs";
import { getUserProfile } from "./getUserProfile.mjs";

/**
 * Function for checking if user is logged inn on pageload. If the user has stored data in localstorage, the profile is set up in navbar and the user sees more info on listing
 */
export function checkIfUserIsLoggedIN() {
  if (JSON.parse(localStorage.getItem("userInfo"))) {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const { name, accesstoken } = userData;
    const getProfileUrl = url + "profiles/" + name;
    getUserProfile(getProfileUrl, accesstoken);

    //Api call to fetch user info
    //add number of items link and number of wins if there are any
  } else {
    userContainerNav.innerHTML = "Sign In";
  }
}

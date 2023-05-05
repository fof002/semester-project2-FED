/**
 * Function for logging out user.
 */

export function logoutUser() {
  localStorage.removeItem("userInfo");
  location.assign("login.html");
}

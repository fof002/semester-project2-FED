export function logoutUser() {
  localStorage.removeItem("userInfo");
  location.assign("login.html");
}

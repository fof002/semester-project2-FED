//register user constants
export const registerUsernameInput =
  document.querySelector("#registerUserName");
export const registerEmailHelp = document.querySelector("#registerEmailHelp");
export const registerPasswordInput =
  document.querySelector("#registerPassword");
export const registerPasswordHelp = document.querySelector(
  "#registerPasswordHelp"
);
export const registerNameInput = document.querySelector("#registerName");
export const registerNameHelp = document.querySelector("#registerNameHelp");
export const registerAvatarInput = document.querySelector("#registerAvatar");
export const registerUserBtn = document.querySelector("#registerUserBtn");
export const registerUserModal = new bootstrap.Modal("#registerUserModal");
export const userCreatedModal = new bootstrap.Modal("#userCreatedModal");
export const specialCharacters = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
export const errorContainer = document.querySelector("#errorContainer");
export const symbolName = document.querySelector("#symbolName");
export const symbolPassword = document.querySelector("#symbolPassword");
export const symbolEmail = document.querySelector("#symbolEmail");
//login constants
export const loginInputEmail = document.querySelector("#loginInputEmail");
export const loginInputPassword = document.querySelector("#loginInputPassword");
export const loginUserBtn = document.querySelector("#loginUserBtn");
//for the function check if user is logged in
export const userContainerNav = document.querySelector("#userContainerNav");
export const creditsContainer = document.querySelector("#credits");
//Logout button
export const logOutBtn = document.querySelector("#logOutBtn");

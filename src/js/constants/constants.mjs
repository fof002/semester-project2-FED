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
export const errorContainerLogin = document.querySelector(
  "#errorContainerLogin"
);
// create listing function
export const createListingBtn = document.querySelector("#createListingBtn");
export const submitListingBtn = document.querySelector("#submitListingBtn");
export const createListingtitle = document.querySelector("#listingTitle");
export const createListingDesc = document.querySelector("#listingDesc");
export const createListingEndsAt = document.querySelector("#listingEndsAt");
export const createListingTags = document.querySelector("#listingTags");
export const createListingUrl = document.querySelector("#listingUrl");
export const successContainerListing = document.querySelector(
  "#successContainerListing"
);
export const errorContainerListing = document.querySelector(
  "#errorContainerListing"
);
export const loadMoreBtn = document.querySelector("#loadMoreBtn");

// Place bid
export const placeBidInfo = document.querySelector("#bidInfo");
export const highestBidInfo = document.querySelector("#highestBidInfo");
export const placeBidInput = document.querySelector("#placeBidInput");
export const placeNewBidBtn = document.querySelector("#placeNewBidBtn");
export const successContainerBid = document.querySelector(
  "#successContainerBid"
);
export const errorContainerBid = document.querySelector("#errorContainerBid");
export const bidCredit = document.querySelector("#bidCredit");

// view bids
export const bidListGroup = document.querySelector("#bidListGroup");

//for the function check if user is logged in
export const userContainerNav = document.querySelector("#userContainerNav");
export const creditsContainer = document.querySelector("#credits");

//Logout button
export const logOutBtn = document.querySelector("#logOutBtn");

//new avatar
export const newAvatarUrlInput = document.querySelector("#newAvatarUrlInput");
export const errorContainerAvatar = document.querySelector(
  "#errorContainerAvatar"
);
export const registerNewAvatarBtn = document.querySelector(
  "#registerNewAvatarBtn"
);
export const successContainerAvatar = document.querySelector(
  "#successContainerAvatar"
);

//for index.html
export const listingsContainer = document.querySelector("#listingsContainer");

//spinner
export const spinner = `<div class="spinner-border" role="status">
 <span class="sr-only"></span>
</div>`;

//error
export const errorMessage = `<ul
class="alert alert-danger pl-2"
role="alert"
id="errorContainerAvatar"
style="padding-left: 2em"
;
><li>Something went wrong. Try again or <a class="text-dark" href="mailto:contact@theauctionhouse.com">contact</a> us for assistance</li></ul>`;

import {
  logOutBtn,
  registerNewAvatarBtn,
  submitListingBtn,
  placeNewBidBtn,
} from "./constants/constants.mjs";
import { checkIfUserIsLoggedIN } from "./functions/checkIfUserLoggedIn.mjs";
import { logoutUser } from "./functions/logout.mjs";
import { changeAvatar } from "./functions/changeAvatar.mjs";
import { getListings } from "./functions/getListings.mjs";
import { createNewListing } from "./functions/createListing.mjs";
import { openBidModal, placeBid } from "./functions/placeBid.mjs";
import { getBids } from "./functions/viewBids.mjs";

//function checking if user is logged in
checkIfUserIsLoggedIN();

//Function for logging out user
logOutBtn.addEventListener("click", logoutUser);

//eventlistener for changing avatar
registerNewAvatarBtn.addEventListener("click", changeAvatar);

// function for fetching listings on load
getListings(12);

// Eventlistener for creating listings
submitListingBtn.addEventListener("click", createNewListing);

//setting item id to location when clicking button for bidding

document.addEventListener("click", openBidModal);

//eventlistener for click on BID button
placeNewBidBtn.addEventListener("click", placeBid);

//eventlistener for bids
document.addEventListener("click", getBids);

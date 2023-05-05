import {
  logOutBtn,
  registerNewAvatarBtn,
  submitListingBtn,
  placeNewBidBtn,
  loadMoreBtn,
} from "./constants/constants.mjs";
import { checkIfUserIsLoggedIN } from "./functions/checkIfUserLoggedIn.mjs";
import { logoutUser } from "./functions/logout.mjs";
import { changeAvatar } from "./functions/changeAvatar.mjs";
import { getListings, loadMoreListings } from "./functions/getListings.mjs";
import { createNewListing } from "./functions/createListing.mjs";
import { openBidModal, placeBid } from "./functions/placeBid.mjs";
import { getBids } from "./functions/viewBids.mjs";

//function checking if user is logged in
checkIfUserIsLoggedIN();

//Function for logging out user
logOutBtn.addEventListener("click", logoutUser);

//eventlistener for changing avatar
registerNewAvatarBtn.addEventListener("click", changeAvatar);

// functions for fetching listings and loading more
getListings(30);
loadMoreBtn.addEventListener("click", loadMoreListings);

// Eventlistener for creating listings
submitListingBtn.addEventListener("click", createNewListing);
//setting item id to location when clicking button for bidding

document.addEventListener("click", openBidModal);

//eventlistener for click on BID button
placeNewBidBtn.addEventListener("click", placeBid);

//eventlistener for bids
document.addEventListener("click", getBids);

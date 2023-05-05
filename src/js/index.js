import {
  logOutBtn,
  registerNewAvatarBtn,
  submitListingBtn,
  placeNewBidBtn,
  loadMoreBtn,
  createListingtitle,
  createListingEndsAt,
  searchBtn,
  searchInput,
} from "./constants/constants.mjs";
import { checkIfUserIsLoggedIN } from "./functions/checkIfUserLoggedIn.mjs";
import { logoutUser } from "./functions/logout.mjs";
import { changeAvatar } from "./functions/changeAvatar.mjs";
import {
  getListings,
  loadMoreListings,
  searchSubmitBtnEnabler,
} from "./functions/getListings.mjs";
import {
  createNewListing,
  listingSubmitBtnEnabler,
} from "./functions/createListing.mjs";
import { openBidModal, placeBid } from "./functions/placeBid.mjs";
import { getBids } from "./functions/viewBids.mjs";
import { enableSearchParams } from "./functions/searchParams.mjs";

//function checking if user is logged in
checkIfUserIsLoggedIN();

//Function for logging out user
logOutBtn.addEventListener("click", logoutUser);

//eventlistener for changing avatar
registerNewAvatarBtn.addEventListener("click", changeAvatar);

// functions for fetching listings and loading more
getListings(30);
loadMoreBtn.addEventListener("click", loadMoreListings);
searchBtn.addEventListener("click", enableSearchParams);
searchInput.addEventListener("keyup", searchSubmitBtnEnabler);

// Eventlistener for creating listings
submitListingBtn.addEventListener("click", createNewListing);
createListingEndsAt.addEventListener("keyup", listingSubmitBtnEnabler);
createListingtitle.addEventListener("keyup", listingSubmitBtnEnabler);

//setting item id to location when clicking button for bidding

document.addEventListener("click", openBidModal);

//eventlistener for click on BID button
placeNewBidBtn.addEventListener("click", placeBid);

//eventlistener for bids
document.addEventListener("click", getBids);

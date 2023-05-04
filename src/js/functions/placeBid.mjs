import {
  placeBidInfo,
  placeNewBidBtn,
  highestBidInfo,
  placeBidInput,
  errorContainerBid,
  successContainerBid,
} from "../constants/constants.mjs";
import { url } from "../BASE_URL.mjs";
import { getListings } from "./getListings.mjs";
import { checkIfUserIsLoggedIN } from "./checkIfUserLoggedIn.mjs";

export function openBidModal(event) {
  if (event.target.matches(".place-bid-btn")) {
    const bidItemId = event.target.getAttribute("data-item-id");
    const bidItemTitle = event.target.getAttribute("data-item-name");
    const bidItemHighest = event.target.getAttribute("data-item-bid");
    placeBidInfo.innerHTML = bidItemTitle;
    highestBidInfo.innerHTML = bidItemHighest;
    placeBidInput.placeholder = `Bid must be higher than: ${bidItemHighest}`;
    placeBidInput.setAttribute("data-highest", bidItemHighest);
    placeNewBidBtn.setAttribute("data-id", bidItemId);
  }
}

/**
 * Function for placing bid for user.
 */

export async function placeBid() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { accesstoken } = userInfo;
  const userBid = { amount: parseFloat(placeBidInput.value) };
  const currentItemId = placeNewBidBtn.getAttribute("data-id");
  const bidUrl = url + "listings/" + currentItemId + "/bids";

  try {
    fetch(bidUrl, {
      method: "POST",
      body: JSON.stringify(userBid),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.errors) {
          errorContainerBid.style.display = "block";
          errorContainerBid.innerHTML = json.errors[0].message;
          console.log(json);
        } else {
          errorContainerBid.style.display = "none";
          successContainerBid.style.display = "block";
          successContainerBid.innerHTML = "Your bid has been placed!";
          updateUserCredit();
          checkIfUserIsLoggedIN();
          getListings(12);
        }
      });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Function for updating usercredit
 */

function updateUserCredit() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { credits, name, email, accesstoken, avatar } = userInfo;
  const newCredit = parseFloat(credits) - parseFloat(placeBidInput.value);
  localStorage.clear();
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      accesstoken: accesstoken,
      email: email,
      name: name,
      credits: newCredit,
      avatar: avatar,
    })
  );
}

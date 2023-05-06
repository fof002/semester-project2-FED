import { url } from "../BASE_URL.mjs";
import { bidListGroup, errorMessage } from "../constants/constants.mjs";

/**
 * Function for adding bids in the modal whih opens when user click view bids.
 */
export async function getBids(event) {
  if (event.target.matches(".view-bid-btn")) {
    const bidItemId = event.target.getAttribute("data-item-id");
    const singleListingUrl = url + "listings/" + bidItemId + "?_bids=true";
    try {
      fetch(singleListingUrl)
        .then((response) => response.json())
        .then((listing) => {
          if (listing.errors) {
            bidListGroup.innerHTML = errorMessage;
          } else {
            bidListGroup.innerHTML = "";
            const bids = listing.bids;
            console.log(bids);
            bids.forEach((bid, index) => {
              let currentBidIndex = index + 1;
              bidListGroup.innerHTML += `<li class="list-group-item">Bid ${currentBidIndex} : <span style="font-style:italic">${
                bid.amount
              } - ${bid.bidderName} - ${new Date(
                bid.created
              ).toDateString()}</span></li>`;
            });
          }
        });
    } catch {
      bidListGroup.innerHTML = errorMessage;
    }
  }
}

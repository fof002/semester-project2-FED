import { url } from "../BASE_URL.mjs";

const placeBidUrl = url + "id" + "/bids";

export function openBidModal(event) {
  if (event.target.matches(".place-bid-btn")) {
    const bidItemId = event.target.getAttribute("data-item-id");
    const newBidUrl = "index.html?biddingOn=" + bidItemId;
    window.history.replaceState("state", "title", newBidUrl);
  }
}

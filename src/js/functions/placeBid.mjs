import { url } from "../BASE_URL.mjs";

const placeBidUrl = url + "id" + "/bids";

export function openBidModal(event) {
  const bidItemId = getAttribute("data-item-id");
  const newBidUrl = "index.html?" + bidItemId;
  window.history.replaceState("state", "title", newBidUrl);
}

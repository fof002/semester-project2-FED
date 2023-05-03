export function openBidModal(event) {
  if (event.target.matches(".place-bid-btn")) {
    const bidItemId = event.target.getAttribute("data-item-id");
    const newBidUrl = "index.html?id=" + bidItemId;
    window.history.replaceState("state", "title", newBidUrl);
    const searchParams = new URLSearchParams(document.location.search);
    const paramId = searchParams.get("id");
    console.log(paramId);
  }
}

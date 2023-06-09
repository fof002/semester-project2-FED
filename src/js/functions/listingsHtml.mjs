import { listingsContainer } from "../constants/constants.mjs";

/**
 * Function for creating HTML content for listings
 * @param {string} mediaListing
 * @param {string} titleListing
 * @param {string} descriptionListing
 * @param {string} createdListing
 * @param {number} bidsListing
 * @param {number} idListing
 */

let bidBtn = "";
let bidView = "";
let viewBidBtn = "";
let deleteBtn = "";
let changeBtn = "";

export function createListingsHtml(
  mediaListing,
  titleListing,
  sellerListing,
  sellerEmailListing,
  descriptionListing,
  createdListing,
  idListing,
  highestBidListing,
  endsAtListing,
  bidsListing
) {
  bidBtn = "";
  bidView = "";
  viewBidBtn = "";
  deleteBtn = "";
  changeBtn = "";
  if (JSON.parse(localStorage.getItem("userInfo"))) {
    bidBtn = `
   <button
     class="btn btn-outline-dark bg-primary mt-1 place-bid-btn" 
     type="button"
     data-bs-toggle="modal"
     data-bs-target="#placeBidModal"
     data-item-id="${idListing}"
     data-item-name="${titleListing}"
     data-item-bid ="${highestBidListing}"
     >Place bid</button>
     `;
    bidView = `<div class="card-body mt-2">
      <a href="mailto:${sellerEmailListing}" 
        class="card-link text-dark"
      >Contact seller</a>
      </div>`;

    checkIfListingIsCurrentUsers(sellerListing, idListing);
    checkIfThereAreNoBids(bidsListing, idListing);
    checkIfTheBidsAreWOn();
  }
  listingsContainer.innerHTML += `<div
              class="card shadow pb-3 listing-card"
              style="width: 24rem"
            >
              <img
                class="card-img-top p-3"
                src="${mediaListing}"
                alt="${titleListing}"
                height="270"
                onerror="this.onerror=null; this.src='img/image-regular.svg'"
              />
              <div class="card-body">
                <h5 class="card-title">${titleListing}</h5>
                ${bidBtn} 
                ${viewBidBtn}
                ${deleteBtn}
              </div>
              <ul class="list-group list-group-flush border-none">
                <li class="list-group-item"> <details>
                <summary>Description</summary>
                <p>
                ${descriptionListing}
                </p>
              </details></li>
                <li class="list-group-item">Seller: <span style="font-style:italic">${sellerListing}</span></li>
                <li class="list-group-item">Created: <span style="font-style:italic">${new Date(
                  createdListing
                ).toDateString()}</span></li>
                <li class="list-group-item">Ends at: <span style="font-style:italic">${new Date(
                  endsAtListing
                ).toDateString()}</span></li>
                <li class="list-group-item">Highest bid: <span style="font-style:italic">${highestBidListing}</span></li>
              </ul>
                  ${bidView}
            </div>`;
}

/**
 * Function for removing bidBtn if the item belongs to current user
 * @param {string} sellerName - Name of the seller
 */

function checkIfListingIsCurrentUsers(sellerName, idItem) {
  const userObject = JSON.parse(localStorage.getItem("userInfo"));
  if (userObject.name === sellerName) {
    bidBtn = "";
    deleteBtn = `<button
    class="btn btn-outline-dark bg-primary mt-1 delete-listing-btn" 
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#deleteModal"
    id="deleteBtn"
    data-item-id="${idItem}"
    >Delete</button>`;
  }
}

/**
 * Function for checking for bids on listing - disables button if there are no bids
 * @param {number} bidsOfListing - the bids of the current listing
 * @param {string} id - the id of the current listing
 */

function checkIfThereAreNoBids(bidsOfListing, id) {
  if (bidsOfListing.length === 0) {
    viewBidBtn = `<button
    class="btn btn-outline-dark bg-primary mt-1 view-bid-btn" 
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#viewBidModal"
    data-item-id="${id}"
    disabled
    >No bids</button>`;
  } else {
    viewBidBtn = `<button
    class="btn btn-outline-dark bg-primary mt-1 view-bid-btn" 
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#viewBidModal"
    data-item-id="${id}"
    >View bids</button>`;
  }
}

function checkIfTheBidsAreWOn() {
  if (new URL(document.location).searchParams.get("winnerusername")) {
    bidBtn = "";
  }
}

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

export function createListingsHtml(
  mediaListing,
  titleListing,
  sellerListing,
  sellerEmailListing,
  descriptionListing,
  createdListing,
  idListing,
  highestBidListing
) {
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
     <button
     class="btn btn-outline-dark bg-primary mt-1 view-bid-btn" 
     type="button"
     data-bs-toggle="modal"
     data-bs-target="#viewBidModal"
     data-item-id="${idListing}"
     data-item-name="${titleListing}"
     data-item-bid ="${highestBidListing}"
     >View bids</button>`;
    bidView = `<div class="card-body mt-2">
      <a href="mailto:${sellerEmailListing}" 
        class="card-link text-dark"
      >Contact seller</a>
      </div>`;
  }
  listingsContainer.innerHTML += `<div
              class="card shadow pb-3"
              style="width: 24rem"
            >
              <img
                class="card-img-top p-3"
                src="${mediaListing}"
                alt="${titleListing}"
                height="320"
                onerror="this.onerror=null; this.src='img/image-regular.svg'"
              />
              <div class="card-body">
                <h5 class="card-title">${titleListing}</h5>
                ${bidBtn}
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
                <li class="list-group-item">Highest bid: <span style="font-style:italic">${highestBidListing}</span></li>
              </ul>
                  ${bidView}
            </div>`;
}

import { url } from "../BASE_URL.mjs";
import {
  errorMessage,
  moreListingsContainer,
} from "../constants/constants.mjs";
import { createListingsHtml } from "./listingsHtml.mjs";
import { findHighestBid } from "./findHighestBid.mjs";

let highestBid = "";

export async function loadMoreListings() {
  const numberOfCurrentListings =
    document.querySelectorAll(".listing-card").length;
  const listingsUrl =
    url +
    `listings?limit=20&offset=${numberOfCurrentListings}&_seller=true&_bids=true&_active=true&`;
  console.log(numberOfCurrentListings);
  try {
    fetch(listingsUrl)
      .then((response) => response.json())
      .then((listings) => {
        if (listings.errors) {
          moreListingsContainer.innerHTML = errorMessage;
        } else {
          for (let i = 0; i < listings.length; i++) {
            const {
              title,
              description,
              seller: { name, email },
              id,
              created,
              media,
              endsAt,
            } = listings[i];
            findHighestBid(listings[i]);
            createListingsHtml(
              media,
              title,
              name,
              email,
              description,
              created,
              id,
              highestBid,
              endsAt
            );
          }
        }
      });
  } catch {
    moreListingsContainer.innerHTML = errorMessage;
  }
}

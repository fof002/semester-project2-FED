import { url } from "../BASE_URL.mjs";
import {
  listingsContainer,
  spinner,
  errorMessage,
} from "../constants/constants.mjs";
import { createListingsHtml } from "./listingsHtml.mjs";

let highestBid = "";
/**
 * Function for fetching listings from auction API. Apply number of listings to be returned as a parameter
 * @param {number} numberOfListings - The number of listings you want returned from the API call
 */

export async function getListings(numberOfListings) {
  const listingsUrl =
    url +
    `listings?limit=${numberOfListings}&_seller=true&_bids=true&_active=true&`;
  try {
    fetch(listingsUrl)
      .then((response) => response.json())
      .then((listings) => {
        if (listings.errors) {
          listingsContainer.innerHTML = "";
          listingsContainer.innerHTML = errorMessage;
        } else {
          listingsContainer.innerHTML = "";
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
    listingsContainer.innerHTML = errorMessage;
  }
}

function findHighestBid(paramListings) {
  let bidsArray = paramListings.bids;
  let arrayOfBids = bidsArray.map((sum) => {
    return sum.amount;
  });
  if (arrayOfBids.length === 0) {
    highestBid = 0;
  } else {
    highestBid = Math.max(...arrayOfBids);
  }
}

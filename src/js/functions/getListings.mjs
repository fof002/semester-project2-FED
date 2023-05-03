import { url } from "../BASE_URL.mjs";
import {
  listingsContainer,
  spinner,
  errorMessage,
} from "../constants/constants.mjs";
import { createListingsHtml } from "./listingsHtml.mjs";

/**
 * Function for fetching listings from auction API. Apply number of listings to be returned as a parameter
 * @param {number} numberOfListings
 */

export async function getListings(numberOfListings) {
  const listingsUrl =
    url +
    `listings?limit=${numberOfListings}&_seller=true&_bids=true&_active=true&`;
  listingsContainer.innerHTML = spinner;
  try {
    fetch(listingsUrl)
      .then((response) => response.json())
      .then((listings) => {
        if (listings.errors) {
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
              bids: { amount },
            } = listings[i];
            createListingsHtml(
              media,
              title,
              name,
              email,
              description,
              created,
              amount,
              id
            );
          }
        }
      });
  } catch {
    listingsContainer.innerHTML = errorMessage;
  }
}

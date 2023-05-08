import { url } from "../BASE_URL.mjs";
import {
  listingsContainer,
  errorMessage,
  moreListingsContainer,
  searchInput,
  spinner,
  header,
  loadMoreBtn,
} from "../constants/constants.mjs";
import { createListingsHtml } from "./listingsHtml.mjs";

let highestBid = "";
/**
 * Function for fetching listings from auction API. Apply number of listings to be returned as a parameter
 * @param {number} numberOfListings - The number of listings you want returned from the API call
 */

export async function getListings(numberOfListings) {
  if (
    !new URL(document.location).searchParams.get("search") &&
    !new URL(document.location).searchParams.get("username")
  ) {
    const listingsUrl =
      url +
      `listings?limit=${numberOfListings}&_seller=true&_bids=true&sort=created&sortOrder=desc&_active=true&`;
    header.innerHTML = "Browse Items";
    try {
      fetch(listingsUrl)
        .then((response) => response.json())
        .then((listings) => {
          console.log(listings);
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
                bids,
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
                endsAt,
                bids
              );
            }
          }
        });
    } catch {
      listingsContainer.innerHTML = errorMessage;
    }
  }
}

/**
 * Function for loading more listings. Offset gets value from the amount of items that are currently in display on each click
 */
export async function loadMoreListings() {
  const numberOfCurrentListings =
    document.querySelectorAll(".listing-card").length;
  const listingsUrl =
    url +
    `listings?limit=20&offset=${numberOfCurrentListings}&_seller=true&sort=created&sortOrder=desc&_bids=true&_active=true&`;
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
              bids,
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
              endsAt,
              bids
            );
          }
        }
      });
  } catch {
    moreListingsContainer.innerHTML = errorMessage;
  }
}

/**
 * Function for searching for items. Searches in description, tags and title.
 * @param {string} searchParamsUrl - URL for the API call when searching
 */

export async function searchListings(searchParamsUrl) {
  if (searchParamsUrl) {
    loadMoreBtn.style.display = "none";
    listingsContainer.innerHTML = spinner;
    header.innerHTML = "Search results";
    const searchListingsUrl =
      url + `listings?_seller=true&sort=created&sortOrder=desc&_bids=true&`;
    try {
      fetch(searchListingsUrl)
        .then((response) => response.json())
        .then((listings) => {
          if (listings.errors) {
            listingsContainer.innerHTML = "";
            listingsContainer.innerHTML = errorMessage;
          } else {
            let descriptionOfListing = "";
            const searchParameters = searchParamsUrl;
            const searchResults = listings.filter((listing) => {
              let titleOfListing = listing.title.toLowerCase();
              if (listing.description) {
                descriptionOfListing = listing.description.toLowerCase();
              }
              if (
                titleOfListing.includes(searchParameters) ||
                descriptionOfListing.toLowerCase().includes(searchParameters)
              ) {
                return true;
              }
            });
            if (searchResults.length === 0) {
              listingsContainer.innerHTML = "No results found";
            } else {
              listingsContainer.innerHTML = "";
              for (let i = 0; i < searchResults.length; i++) {
                const {
                  title,
                  description,
                  seller: { name, email },
                  id,
                  created,
                  media,
                  endsAt,
                  bids,
                } = searchResults[i];
                findHighestBid(searchResults[i]);
                createListingsHtml(
                  media,
                  title,
                  name,
                  email,
                  description,
                  created,
                  id,
                  highestBid,
                  endsAt,
                  bids
                );
              }
            }
          }
        });
    } catch {
      listingsContainer.innerHTML = errorMessage;
    }
  }
}

/**
 * Function for finding all listings per user.
 * @param {string} userParamsUrl - URL for the API call when searching
 */

export async function getListingsPerUser(userParamsUrl) {
  if (userParamsUrl) {
    loadMoreBtn.style.display = "none";
    listingsContainer.innerHTML = spinner;
    header.innerHTML = "Your Items";
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const { accesstoken } = userInfo;
    try {
      const usernameFromUrl = new URL(document.location).searchParams.get(
        "username"
      );
      const usernameUrl =
        url +
        "profiles/" +
        usernameFromUrl +
        "/listings?_seller=true&sort=created&sortOrder=desc&_bids=true&";
      fetch(usernameUrl, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${accesstoken}`,
        },
      })
        .then((response) => response.json())
        .then((listings) => {
          if (listings.errors) {
            listingsContainer.innerHTML = "";
            listingsContainer.innerHTML = errorMessage;
          } else {
            if (listings.length === 0) {
              listingsContainer.innerHTML = "You don't seem to have any items";
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
                  bids,
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
                  endsAt,
                  bids
                );
              }
            }
          }
        });
    } catch {
      listingsContainer.innerHTML = errorMessage;
    }
  }
}

/**
 * Function for enabling seearch when the user has typed in more than two keys
 */
export function searchSubmitBtnEnabler() {
  if (searchInput.value.length > 2) {
    searchBtn.disabled = false;
  } else {
    searchBtn.disabled = true;
  }
}

/**
 * Function for finding the highest bid in the bids array in each listing
 * @param {object} paramListings
 */
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

import { url } from "../BASE_URL.mjs";
import {
  createListingDesc,
  createListingEndsAt,
  createListingUrl,
  createListingtitle,
  createListingTags,
  successContainerListing,
  errorContainerListing,
  submitListingBtn,
} from "../constants/constants.mjs";
import { getListings } from "./getListings.mjs";

const listingUrl = url + "listings";
let mediaUrl = "";

/**
 * Function for creating new listing.
 */

export async function createNewListing() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { accesstoken } = userInfo;
  const newListingContent = {
    title: createListingtitle.value.trim(),
    description: createListingDesc.value.trim(),
    tags: [createListingTags.value.trim()],
    media: createMediaproperty(),
    endsAt: new Date(createListingEndsAt.value).toISOString(),
  };
  try {
    fetch(listingUrl, {
      method: "POST",
      body: JSON.stringify(newListingContent),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.errors) {
          successContainerListing.style.display = "none";
          errorContainerListing.style.display = "block";
          errorContainerListing.innerHTML = `<li>${json.errors[0].message}</li>`;
        } else {
          console.log(json);
          errorContainerListing.style.display = "none";
          successContainerListing.style.display = "block";
          getListings(12);
        }
      });
  } catch (error) {
    errorContainerAvatar.style.display = "block";
    errorContainerAvatar.innerHTML = `<li>${error}</li>`;
  }
}
/**
 * Function for validating that fields when creating listing is not empty
 */
export function listingSubmitBtnEnabler() {
  if (createListingEndsAt.value && createListingtitle.value.length > 3) {
    submitListingBtn.disabled = false;
  } else {
    submitListingBtn.disabled = true;
  }
}

function createMediaproperty() {
  if (createListingUrl.value.trim()) {
    return (mediaUrl = [createListingUrl.value.trim()]);
  }
}

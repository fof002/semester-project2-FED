import { url } from "../BASE_URL.mjs";
import {
  createListingDesc,
  createListingEndsAt,
  createListingUrl,
  createListingtitle,
  createListingTags,
  successContainerListing,
  errorContainerListing,
} from "../constants/constants.mjs";
import { getListings } from "./getListings.mjs";

const listingUrl = url + "listings";

export async function createNewListing() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { accesstoken } = userInfo;
  const newListingContent = {
    title: createListingtitle.value,
    description: createListingDesc.value,
    tags: [createListingTags.value],
    media: [createListingUrl.value],
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

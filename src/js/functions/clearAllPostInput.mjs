import {
  createListingDesc,
  createListingEndsAt,
  createListingUrl,
  createListingtitle,
  createListingTags,
} from "../constants/constants.mjs";

export function clearAllPostInput() {
  createListingDesc.value = "";
  createListingEndsAt.value = "";
  createListingUrl.value = "";
  createListingtitle.value = "";
  createListingTags.value = "";
}

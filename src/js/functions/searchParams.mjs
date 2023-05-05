import { searchInput } from "../constants/constants.mjs";

export function enableSearchParams() {
  let searchInputValue = searchInput.value.toLowerCase().toString();
  location.assign("index.html?search=" + searchInputValue);
}

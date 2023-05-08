import {
  deleteListingBtn,
  alerDelete,
  errorMessage,
} from "../constants/constants.mjs";
import { url } from "../BASE_URL.mjs";

/**
 * Setting id of item to button of modal
 * @param {event} event - Event
 */

export async function setIdOfDeleteItem(event) {
  if (event.target.matches(".delete-listing-btn")) {
    const itemId = event.target.getAttribute("data-item-id");
    deleteListingBtn.setAttribute("data-item-id", itemId);
  }
}
/**
 * Function for deleting listing
 * @param {event} event - event
 */
export async function deleteListing(event) {
  const itemId = event.target.getAttribute("data-item-id");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { accesstoken } = userInfo;
  const deleteItemUrl = url + "listings/" + itemId;
  try {
    fetch(deleteItemUrl, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
    }).then(() => location.reload());
  } catch (error) {
    alerDelete.innerHTML = errorMessage;
  }
}

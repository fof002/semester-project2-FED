import { url } from "../BASE_URL.mjs";
import { listingsContainer } from "../constants/constants.mjs";

const listingsUrl = url + "listings?limit=12";

export async function getListings() {
  try {
    fetch(listingsUrl)
      .then((response) => response.json())
      .then((listings) => {
        console.log(listings);
        for (let i = 0; i < listings.length; i++) {
          const { title, description, id, created, media } = listings[i];
          listingsContainer.innerHTML += `<div
              class="card shadow border-0 rounded-0"
              style="width: 20rem"
            >
              <img
                class="card-img-top p-3"
                src="${media}"
                alt="${title}"
                height="200"
              />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p style="font-style: italic;" class="card-text">${description}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-top">Seller: seller.name</li>
                <li class="list-group-item">Created: ${created}</li>
                <li class="list-group-item">Highest bid: bids.amount</li>
                <li class="list-group-item">
                  <button
                    class="btn btn-outline-dark bg-primary mt-1"
                    data-item-id="${id}"
                  >
                    Place bid
                  </button>
                </li>
              </ul>
              <div class="card-body border-top mt-2">
                <a href="#" data-item-id="${id}" class="card-link text-dark"
                  >View bids</a
                >
                <a href="mailto:seller.email" class="card-link text-dark"
                  >Contact seller</a
                ><a href="mailto:seller.email" class="card-link text-dark"
                  >Tags</a
                >
              </div>
            </div>`;
        }
      });
  } catch (error) {
    console.log(error);
  }
}

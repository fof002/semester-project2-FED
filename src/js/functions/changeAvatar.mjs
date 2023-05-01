import { url } from "../BASE_URL.mjs";

const changeAvatarUrl = url + "profiles/" + "name" + "/media";

async function changeAvatar() {
  try {
    fetch(changeAvatarUrl, {
      method: "PUT",
      body: JSON.stringify(userInput),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {});
  } catch {}
}

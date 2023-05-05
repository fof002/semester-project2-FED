import { enableSearchParams } from "./searchParams.mjs";

export function preventSearchDefault(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    enableSearchParams();
  }
}

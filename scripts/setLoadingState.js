import { loadingElement } from "./elements.js";

export default function setLoadingState(state) {
  loadingElement.classList.toggle("hidden", !state);
}

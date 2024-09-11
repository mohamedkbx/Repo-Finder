import { loadingElement } from "./elements.js";
import { setSearchResult } from "./setSearchResult.js";

export default function setLoadingState(state) {
  loadingElement.classList.toggle("hidden", !state);
  state && setSearchResult(null);
}

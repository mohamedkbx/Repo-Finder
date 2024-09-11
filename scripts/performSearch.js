import getMessage from "./getMessage";
import setMessage from "./setMessage";
import { setSearchResult } from "./setSearchResult";

const USERS_API = "http://api.github.com/search/users?q=";

export const performSearch = (searchTerm, isUserSelected) => {
  getMessage() && setMessage("");
  const typyQuery = isUserSelected ? "+type:user" : "+type:org";
  if (!searchTerm.trim()) {
    setMessage("Please enter a valid search term");
    return;
  }
  fetch(`${USERS_API}${searchTerm}${typyQuery}`)
    .then((response) => response.json())
    .then((response) => setSearchResult(response.items));
};

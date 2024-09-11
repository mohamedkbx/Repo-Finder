import { setSearchResult } from "./setSearchResult";

const USERS_API = "http://api.github.com/search/users?q=";

export const performSearch = (searchTerm, isUserSelected) => {
  const typyQuery = isUserSelected ? "+type:user" : "+type:org";
  fetch(`${USERS_API}${searchTerm}${typyQuery}`)
    .then((response) => response.json())
    .then((response) => setSearchResult(response.items));
};

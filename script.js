/* TODO
 [x]  1- create function => performSearch(searchInput, userSearchInput)
 [x] 2- call performsearch Inside button event listener 

 preformSearch
   1- fetch data from api 
   if ok then show data in the page 
    if ot show err message
*/

const USERS_API = "http://api.github.com/search/users?q=";

const setSearchResult = () => {};

const performSearch = (searchTerm, isUserSelected) => {
  const typyQuery = isUserSelected ? "+type:user" : "+type:org";
  fetch(`${USERS_API}${searchTerm}${typyQuery}`)
    .then((response) => response.json())
    .then((response) => setSearchResult(response));
};

const buttonElement = document.querySelector(".button");

buttonElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch();
});

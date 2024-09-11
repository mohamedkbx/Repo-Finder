/* TODO
 [x]  1- create function => performSearch(searchInput, userSearchInput)
 [x] 2- call performsearch Inside button event listener 

 preformSearch
   1- fetch data from api 
   if ok then show data in the page 
    if ot show err message
*/

const USERS_API = "http://api.github.com/search/users?q=";

const cardElements = document.querySelector(".cards");

const setSearchResult = (data) => {
  let result = "";
  data.map((item) => {
    result += `<article class="card">
    <img src="${item.avatar_url}" class="img" loading="lazy"/>
    <h2 class="name">${item.login}</h2>
    </article>`;
  });
  cardElements.innerHTML = result;
};

const performSearch = (searchTerm, isUserSelected) => {
  const typyQuery = isUserSelected ? "+type:user" : "+type:org";
  fetch(`${USERS_API}${searchTerm}${typyQuery}`)
    .then((response) => response.json())
    .then((response) => setSearchResult(response.items));
};

const buttonElement = document.querySelector(".button");
const searchInput = document.querySelector(".input");
const userInputElement = document.querySelector("input[value='users']");

buttonElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userInputElement.checked);
});

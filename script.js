/* 
TODO
 [x]  1- create function => performSearch(searchInput, userSearchInput)
 [x] 2- call performsearch Inside button event listener 

 preformSearch
   1- fetch data from api 
   if ok then show data in the page 
    if ot show err message
*/

import { buttonElement, searchInput, userInputElement } from "./scripts/elements.js";
import { performSearch } from "./scripts/performSearch.js";

buttonElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userInputElement.checked);
});

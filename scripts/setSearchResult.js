import { cardElements } from "./elements";

export const setSearchResult = (data) => {
  let result = "";
  data.map((item) => {
    result += `<article class="card">
        <img src="${item.avatar_url}" class="img" loading="lazy"/>
        <h2 class="name">${item.login}</h2>
        </article>`;
  });
  cardElements.innerHTML = result;
};

import { fetchCharacters, renderList } from "../../index.js";
import { prevButton } from "../nav-button/nav-button.js";
// import { fetchCharacters } from "../nav-button/nav-button.js";

// States
let max = null;
export let currPage = 1;
const pagination = document.querySelector('[data-js="pagination"]');
let searchQuery = "";

export const paginate = (event) => {
  const currentButton = event.target.getAttribute("data-js");
  if (currentButton === "button-prev") {
    if (currPage > 1) currPage--;
  } else {
    if (currPage < max) currPage++;
  }
  renderList();
};

export const updatePagination = (maxPages) => {
  max = maxPages;
  pagination.innerHTML = currPage + " / " + max;
};

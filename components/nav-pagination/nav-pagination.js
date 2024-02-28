import { fetchCharacters, renderList } from "../../index.js";
import { prevButton } from "../nav-button/nav-button.js";
// import { fetchCharacters } from "../nav-button/nav-button.js";

// States
export const paginationObj = { max: 1, page: 1 };
const pagination = document.querySelector('[data-js="pagination"]');
let searchQuery = "";

export const paginate = (event) => {
  const currentButton = event.target.getAttribute("data-js");
  if (currentButton === "button-prev") {
    if (paginationObj.page > 1) paginationObj.page--;
  } else {
    if (paginationObj.page < paginationObj.max) paginationObj.page++;
  }
  renderList();
};

export const updatePagination = () => {
  pagination.innerHTML = paginationObj.page + " / " + paginationObj.max;
};

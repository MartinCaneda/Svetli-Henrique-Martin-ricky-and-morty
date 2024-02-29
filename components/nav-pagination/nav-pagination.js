import { renderList } from "../../index.js";

// States
let max = null;
export let currPage = 1;

export function setCurrPage(page) {
  currPage = page;
}

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
  const updateBlock = document.querySelector('[data-js="pagination"]');
  if (maxPages) {
    updateBlock.textContent = currPage + " / " + max;
  } else {
    updateBlock.textContent = "";
  }
};

export function createPagination() {
  const navigation = document.createElement("nav");
  navigation.classList.add("navigation");
  navigation.setAttribute("data-js", "navigation");

  const infoPagination = document.createElement("span");
  infoPagination.classList.add("navigation__pagination");
  infoPagination.setAttribute("data-js", "pagination");
  navigation.append(infoPagination);
  return navigation;
}

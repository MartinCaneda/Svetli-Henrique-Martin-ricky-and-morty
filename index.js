import { createCharacterCard } from "./components/card/card.js";
import { prevButton } from "./components/nav-button/nav-button.js";
import { nextButton } from "./components/nav-button/nav-button.js";
import {
  updatePagination,
  currPage,
} from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

let query = null;
let fetchURL = "";

export async function fetchCharacters(page) {
  try {
    fetchURL = `https://rickandmortyapi.com/api/character?page=${page}`;
    if (query) fetchURL += `&name=${query}`;
    const response = await fetch(fetchURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const renderList = async () => {
  const data = await fetchCharacters(currPage);
  cardContainer.innerHTML = "";
  data.results.forEach((element) => {
    createCharacterCard(cardContainer, element);
  });
  updatePagination(data.info.pages);
};

renderList();

const form = document.querySelector('[data-js="search-bar"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const info = new FormData(event.target);
  const data = Object.fromEntries(info);
  query = data.query;
  renderList();
  console.log(data.query);
});

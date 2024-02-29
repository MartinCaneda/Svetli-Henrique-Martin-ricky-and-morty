import { createCharacterCard } from "./components/card/card.js";
import {
  updatePagination,
  currPage,
  createPagination,
  paginate,
  setCurrPage,
} from "./components/nav-pagination/nav-pagination.js";
import { createButton } from "./components/nav-button/nav-button.js";

const body = document.querySelector("body");

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');

let query = null;
let fetchURL = "";

export async function fetchCharacters(page) {
  try {
    fetchURL = `https://rickandmortyapi.com/api/character?page=${page}`;
    if (query) fetchURL += `&name=${query}`;
    const response = await fetch(fetchURL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const renderList = async () => {
  const data = await fetchCharacters(currPage);
  cardContainer.innerHTML = "";
  if (data.results) {
    data.results.forEach((element) => {
      createCharacterCard(cardContainer, element);
    });
    updatePagination(data.info.pages);
  } else {
    cardContainer.innerHTML = "<li>Character not found!</li>";
    updatePagination(null);
  }
};

renderList();

const form = document.querySelector('[data-js="search-bar"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const info = new FormData(event.target);
  const data = Object.fromEntries(info);
  query = data.query;
  setCurrPage(1);
  renderList();
});

const pagination = createPagination();
pagination.prepend(createButton("prev", "previous", paginate));
pagination.append(createButton("next", "next", paginate));
body.append(pagination);

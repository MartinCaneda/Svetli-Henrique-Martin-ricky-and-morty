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

export async function fetchCharacters(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
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
    const { image, name, status, type } = element;
    createCharacterCard(
      cardContainer,
      image,
      name,
      status,
      type,
      element.episode.length
    );
  });
  updatePagination(data.info.pages);
};

renderList();

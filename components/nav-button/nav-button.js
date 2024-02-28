import { paginate } from "../nav-pagination/nav-pagination.js";

export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');

prevButton.addEventListener("click", paginate);
nextButton.addEventListener("click", paginate);

export function createCharacterCard(
  container,
  { image: img, name: nameOfcharacter, status, type, episode }
) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `
	<div class="card__image-container">
	  <img
		class="card__image"
		src="${img}"
		alt="Character ${nameOfcharacter}"
	  />
	  <div class="card__image-gradient"></div>
	</div>
	<div class="card__content">
	  <h2 class="card__title">${nameOfcharacter}</h2>
	  <dl class="card__info">
		<dt class="card__info-title">Status</dt>
		<dd class="card__info-description">${status}</dd>
		<dt class="card__info-title">Type</dt>
		<dd class="card__info-description">${type ? type : "-"}</dd>
		<dt class="card__info-title">Occurrences</dt>
		<dd class="card__info-description">${episode.length}</dd>
	  </dl>
	</div>`;
  //   console.log(newCard);
  container.append(newCard);
}

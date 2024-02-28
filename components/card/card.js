export function createCharacterCard(
  container,
  img,
  nameOfcharacter,
  status,
  type,
  occurrences
) {
  const newCard = document.createElement("li");

  newCard.classList.add("card");
  newCard.innerHTML = `
	<div class="card__image-container">
	  <img
		class="card__image"
		src="${img}"
		alt="Rick Sanchez"
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
		<dd class="card__info-description">${occurrences}</dd>
	  </dl>
	</div>`;

  container.append(newCard);
}

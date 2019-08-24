import {getHoursFromMinutes} from "../utils";

const MAX_DESCRIPTION_LENGTH = 139;

export const createFilmCardTemplate = ({title, rating, date, duration, genre, poster, description, comments}) => {
  return `
    <article class="film-card">
      <h3 class="film-card__title">${title.current}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${new Date(date).getFullYear()}</span>
        <span class="film-card__duration">${getHoursFromMinutes(duration)}</span>
        <span class="film-card__genre">${Array.from(genre)[0]}</span>
      </p>
      <img src="./images/posters/${poster}" alt="${title.current}" class="film-card__poster">
      <p class="film-card__description">
        ${description.length > MAX_DESCRIPTION_LENGTH ? description.substr(0, MAX_DESCRIPTION_LENGTH) + `...` : description}
      </p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  `.trim();
};

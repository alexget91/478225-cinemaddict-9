import AbstractComponent from "./abstract-component";
import {getHoursFromMinutes} from "../utils";

const MAX_DESCRIPTION_LENGTH = 139;

export default class FilmCard extends AbstractComponent {
  constructor({title, rating, date, duration, genre, poster, description, comments}) {
    super();
    this._title = title;
    this._rating = rating;
    this._date = date;
    this._duration = duration;
    this._genre = genre;
    this._poster = poster;
    this._description = description;
    this._comments = comments;
  }

  getTemplate() {
    return `
      <article class="film-card">
        <h3 class="film-card__title js-film-detail-show">${this._title.current}</h3>
        <p class="film-card__rating">${this._rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${new Date(this._date).getFullYear()}</span>
          <span class="film-card__duration">${getHoursFromMinutes(this._duration)}</span>
          <span class="film-card__genre">${Array.from(this._genre)[0]}</span>
        </p>
        <img src="./images/posters/${this._poster}" alt="${this._title.current}" class="film-card__poster js-film-detail-show">
        <p class="film-card__description">
          ${this._description.length > MAX_DESCRIPTION_LENGTH ? this._description.substr(0, MAX_DESCRIPTION_LENGTH) + `...` : this._description}
        </p>
        <a class="film-card__comments js-film-detail-show">${this._comments.length} comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>
    `.trim();
  }
}

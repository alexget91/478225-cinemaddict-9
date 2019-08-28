import {createElement} from "../utils";

export default class FilmsList {
  constructor(notEmpty) {
    this._element = null;
    this._notEmpty = notEmpty;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `
      <section class="films">
        <section class="films-list js-films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
          ${this._notEmpty ? `<div class="films-list__container js-list"></div>` : `<div class="no-result">
            There are no movies in our database
          </div>`}
        </section>
        
        ${this._notEmpty ? `<section class="films-list--extra js-top-rated">
          <h2 class="films-list__title">Top rated</h2>
          <div class="films-list__container js-list"></div>
        </section>
        
        <section class="films-list--extra js-most-commented">
          <h2 class="films-list__title">Most commented</h2>
          <div class="films-list__container js-list"></div>
        </section>` : ``}
      </section>
    `.trim();
  }
}

import AbstractComponent from "./abstract-component";

export default class FilmsPage extends AbstractComponent {
  constructor(notEmpty) {
    super();
    this._notEmpty = notEmpty;
  }

  getTemplate() {
    return `
      <section class="films">
        <section class="films-list js-films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
          ${this._notEmpty ? `<div class="films-list__container js-films-main"></div>` : `<div class="no-result">
            There are no movies in our database
          </div>`}
        </section>
  
        ${this._notEmpty ? `<section class="films-list--extra">
          <h2 class="films-list__title">Top rated</h2>
          <div class="films-list__container js-top-rated"></div>
        </section>
  
        <section class="films-list--extra">
          <h2 class="films-list__title">Most commented</h2>
          <div class="films-list__container js-most-commented"></div>
        </section>` : ``}
      </section>
    `.trim();
  }
}

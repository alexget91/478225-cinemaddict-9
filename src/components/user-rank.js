import {createElement} from "../utils";

export default class UserRank {
  constructor(filmsCount) {
    this._element = null;
    this._filmsCount = filmsCount;
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

  getRankText(filmsCount) {
    if (filmsCount > 20) {
      return `Movie Buff`;
    } else if (filmsCount > 10) {
      return `Fan`;
    } else if (filmsCount > 0) {
      return `Novice`;
    }

    return ``;
  }

  getTemplate() {
    return `
      <section class="header__profile profile">
        <p class="profile__rating">${this.getRankText(this._filmsCount)}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>
    `.trim();
  }
}

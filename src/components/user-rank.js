import AbstractComponent from "./abstract-component";

export default class UserRank extends AbstractComponent {
  constructor(filmsCount) {
    super();
    this._filmsCount = filmsCount;
  }

  getTemplate() {
    return `
      <section class="header__profile profile">
        <p class="profile__rating">${this._getRankText(this._filmsCount)}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>
    `.trim();
  }

  _getRankText(filmsCount) {
    if (filmsCount > 20) {
      return `Movie Buff`;
    } else if (filmsCount > 10) {
      return `Fan`;
    } else if (filmsCount > 0) {
      return `Novice`;
    }

    return ``;
  }
}

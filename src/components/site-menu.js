import AbstractComponent from "./abstract-component";

export default class SiteMenu extends AbstractComponent {
  constructor({watchlist, watched, favorites}) {
    super();
    this._watchlist = watchlist;
    this._watched = watched;
    this._favorites = favorites;
  }

  getTemplate() {
    return `
      <nav class="main-navigation">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${this._watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${this._watched}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${this._favorites}</span></a>
        <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
      </nav>
    `.trim();
  }
}

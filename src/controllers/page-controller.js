import {Position, render, unrender} from "../utils";
import FilmsPage from "../components/films-page";
import ShowMoreButton from "../components/show-more-button";
import FilmCard from "../components/film-card";
import FilmDetails from "../components/film-details";

const FILMS_PER_PAGE = 5;
const HIDE_OVERFLOW_CLASS = `hide-overflow`;

export default class PageController {
  constructor(container, films) {
    this._container = container;
    this._films = films;
    this._firstFilm = 0;
    this._filmsPage = new FilmsPage(this._films.length);
    this._mainList = null;
    this._topRatedList = null;
    this._mostCommentedList = null;
    this._showMoreButton = null;
  }

  init() {
    render(this._container, this._filmsPage.getElement(), Position.BEFOREEND);

    if (this._films.length) {
      this._mainList = this._filmsPage.getElement().querySelector(`.js-films-main`);

      document.querySelector(`.js-films-count`).textContent = this._films.length;

      this._showMoreButton = new ShowMoreButton();
      render(this._filmsPage.getElement().querySelector(`.js-films-list`), this._showMoreButton.getElement(), Position.BEFOREEND);

      this._showMoreFilms(this._films);

      this._topRatedList = this._filmsPage.getElement().querySelector(`.js-top-rated`);
      this._mostCommentedList = this._filmsPage.getElement().querySelector(`.js-most-commented`);
      this._films.slice(0, 2).forEach((film) => this._renderFilm(this._topRatedList, film));
      this._films.slice(0, 2).forEach((film) => this._renderFilm(this._mostCommentedList, film));

      this._showMoreButton.getElement().addEventListener(`click`, () => this._showMoreFilms(this._films));
    }
  }

  _showMoreFilms() {
    this._films.slice(this._firstFilm, this._firstFilm += FILMS_PER_PAGE).forEach((film) => this._renderFilm(this._mainList, film));

    if (this._firstFilm >= this._films.length) {
      this._showMoreButton.hide();
    }
  }

  _renderFilm(container, filmData) {
    const filmCard = new FilmCard(filmData);
    const filmDetails = new FilmDetails(filmData);

    const closeDetailPopup = () => {
      unrender(filmDetails.getElement());
      document.body.classList.remove(HIDE_OVERFLOW_CLASS);
      document.removeEventListener(`keydown`, onEscKeyDown);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        closeDetailPopup();
      }
    };

    filmCard.getElement()
      .addEventListener(`click`, (e) => {
        if (e.target.classList.contains(`js-film-detail-show`)) {
          render(document.body, filmDetails.getElement(), Position.BEFOREEND);
          document.body.classList.add(HIDE_OVERFLOW_CLASS);
          document.addEventListener(`keydown`, onEscKeyDown);
        }
      });

    filmDetails.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    filmDetails.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    filmDetails.getElement()
      .querySelector(`.js-film-detail-close`)
      .addEventListener(`click`, closeDetailPopup);

    render(container, filmCard.getElement(), Position.BEFOREEND);
  }
}

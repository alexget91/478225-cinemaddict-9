import Search from './components/search';
import UserRank from './components/user-rank';
import SiteMenu from './components/site-menu';
import Sort from './components/sort';
import FilmsList from './components/films-list';
import FilmCard from './components/film-card';
import ShowMoreButton from './components/show-more-button';
import FilmDetails from './components/film-details';
import {getFilm, getUserRank, getFiltersCount} from './data';
import {getRandomInt, Position, render, unrender} from './utils';

const FILMS_PER_PAGE = 5;
const MIN_FILMS_COUNT = 0;
const MAX_FILMS_COUNT = 30;
const HIDE_OVERFLOW_CLASS = `hide-overflow`;

const showFilms = (films) => {
  films.splice(0, FILMS_PER_PAGE).forEach((film) => renderFilm(filmsListContainerElement, film));

  if (!films.length) {
    buttonLoadMore.style.display = `none`;
  }
};

const renderFilm = (container, filmData) => {
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

  filmDetails.getElement()
    .querySelector(`.js-film-detail-close`)
    .addEventListener(`click`, closeDetailPopup);

  render(container, filmCard.getElement(), Position.BEFOREEND);
};


const pageHeaderElement = document.querySelector(`.js-page-header`);
const pageMainElement = document.querySelector(`.js-main`);

const films = new Array(getRandomInt(MIN_FILMS_COUNT, MAX_FILMS_COUNT)).fill(``).map(() => getFilm());

render(pageHeaderElement, new Search().getElement(), Position.BEFOREEND);
render(pageHeaderElement, new UserRank(getUserRank()).getElement(), Position.BEFOREEND);
render(pageMainElement, new SiteMenu(getFiltersCount(films)).getElement(), Position.BEFOREEND);
render(pageMainElement, new Sort().getElement(), Position.BEFOREEND);

let filmsListContainerElement;
let buttonLoadMore;

if (films.length) {
  render(pageMainElement, new FilmsList().getElement(), Position.BEFOREEND);

  const filmsListElement = document.querySelector(`.js-films-list`);
  filmsListContainerElement = filmsListElement.querySelector(`.js-list`);
  const filmsTopRatedContainerElement = document.querySelector(`.js-top-rated`).querySelector(`.js-list`);
  const filmsMostCommentedContainerElement = document.querySelector(`.js-most-commented`).querySelector(`.js-list`);

  render(filmsListElement, new ShowMoreButton().getElement(), Position.BEFOREEND);
  buttonLoadMore = document.querySelector(`.js-load-more`);

  document.querySelector(`.js-films-count`).textContent = films.length;

  showFilms(films);
  new Array(2).fill(``).forEach(() => renderFilm(filmsTopRatedContainerElement, getFilm()));
  new Array(2).fill(``).forEach(() => renderFilm(filmsMostCommentedContainerElement, getFilm()));

  document.querySelector(`.js-load-more`).addEventListener(`click`, () => showFilms(films));
}

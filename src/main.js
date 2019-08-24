import {createSearchTemplate} from './components/search';
import {createUserRankTemplate} from './components/user-rank';
import {createSiteMenuTemplate} from './components/site-menu';
import {createSortTemplate} from './components/sort';
import {createFilmsListTemplate} from './components/films-list';
import {createFilmCardTemplate} from './components/film-card';
import {createShowMoreButtonTemplate} from './components/show-more-button';
import {createFilmDetailsTemplate} from './components/film-details';
import {getFilm, getUserRank, getFiltersCount} from './data';
import {getRandomInt} from './utils';

const FILMS_PER_PAGE = 5;
const MIN_FILMS_COUNT = 0;
const MAX_FILMS_COUNT = 30;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const showFilms = (films, count) => {
  films.splice(0, count).forEach((film) => render(filmsListContainerElement, createFilmCardTemplate(film), `beforeend`));

  if (!films.length) {
    buttonLoadMore.style.display = `none`;
  }
};


const pageHeaderElement = document.querySelector(`.js-page-header`);
const pageMainElement = document.querySelector(`.js-main`);

const films = new Array(getRandomInt(MIN_FILMS_COUNT, MAX_FILMS_COUNT)).fill(``).map(() => getFilm());

render(pageHeaderElement, createSearchTemplate(), `beforeend`);
render(pageHeaderElement, createUserRankTemplate(getUserRank()), `beforeend`);
render(pageMainElement, createSiteMenuTemplate(getFiltersCount(films)), `beforeend`);
render(pageMainElement, createSortTemplate(), `beforeend`);

let filmsListContainerElement;
let buttonLoadMore;

if (films.length) {
  render(pageMainElement, createFilmsListTemplate(), `beforeend`);

  const filmsListElement = document.querySelector(`.js-films-list`);
  filmsListContainerElement = filmsListElement.querySelector(`.js-list`);
  const filmsTopRatedContainerElement = document.querySelector(`.js-top-rated`).querySelector(`.js-list`);
  const filmsMostCommentedContainerElement = document.querySelector(`.js-most-commented`).querySelector(`.js-list`);

  render(filmsListElement, createShowMoreButtonTemplate(), `beforeend`);
  buttonLoadMore = document.querySelector(`.js-load-more`);
  render(document.body, createFilmDetailsTemplate(films[0]), `beforeend`);

  document.querySelector(`.js-films-count`).textContent = films.length;

  showFilms(films, FILMS_PER_PAGE);
  new Array(2).fill(``).forEach(() => render(filmsTopRatedContainerElement, createFilmCardTemplate(getFilm()), `beforeend`));
  new Array(2).fill(``).forEach(() => render(filmsMostCommentedContainerElement, createFilmCardTemplate(getFilm()), `beforeend`));

  document.querySelector(`.js-load-more`).addEventListener(`click`, () => {
    showFilms(films, FILMS_PER_PAGE);
  });
}

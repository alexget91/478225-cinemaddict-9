import {createSearchTemplate} from './components/search';
import {createUserRankTemplate} from './components/user-rank';
import {createSiteMenuTemplate} from './components/site-menu';
import {createSortTemplate} from './components/sort';
import {createFilmsListTemplate} from './components/films-list';
import {createFilmCardTemplate} from './components/film-card';
import {createShowMoreButtonTemplate} from './components/show-more-button';
import {createFilmDetailsTemplate} from './components/film-details';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const pageHeaderElement = document.querySelector(`.js-page-header`);
const pageMainElement = document.querySelector(`.js-main`);

render(pageHeaderElement, createSearchTemplate(), `beforeend`);
render(pageHeaderElement, createUserRankTemplate(), `beforeend`);
render(pageMainElement, createSiteMenuTemplate(), `beforeend`);
render(pageMainElement, createSortTemplate(), `beforeend`);
render(pageMainElement, createFilmsListTemplate(), `beforeend`);

const filmsListElement = document.querySelector(`.js-films-list`);
const filmsListContainerElement = filmsListElement.querySelector(`.js-list`);
const filmsTopRatedContainerElement = document.querySelector(`.js-top-rated`).querySelector(`.js-list`);
const filmsMostCommentedContainerElement = document.querySelector(`.js-most-commented`).querySelector(`.js-list`);

new Array(5).fill(``).forEach(() => render(filmsListContainerElement, createFilmCardTemplate(), `beforeend`));
new Array(2).fill(``).forEach(() => render(filmsTopRatedContainerElement, createFilmCardTemplate(), `beforeend`));
new Array(2).fill(``).forEach(() => render(filmsMostCommentedContainerElement, createFilmCardTemplate(), `beforeend`));

render(filmsListElement, createShowMoreButtonTemplate(), `beforeend`);
render(document.body, createFilmDetailsTemplate(), `beforeend`);


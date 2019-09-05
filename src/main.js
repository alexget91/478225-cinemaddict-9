import Search from './components/search';
import UserRank from './components/user-rank';
import SiteMenu from './components/site-menu';
import Sort from './components/sort';
import {getFilm, getUserRank, getFiltersCount} from './data';
import {getRandomInt, Position, render} from './utils';
import PageController from "./controllers/page-controller";

const MIN_FILMS_COUNT = 0;
const MAX_FILMS_COUNT = 30;


const pageHeaderElement = document.querySelector(`.js-page-header`);
const pageMainElement = document.querySelector(`.js-main`);

const films = new Array(getRandomInt(MIN_FILMS_COUNT, MAX_FILMS_COUNT)).fill(``).map(() => getFilm());

render(pageHeaderElement, new Search().getElement(), Position.BEFOREEND);
render(pageHeaderElement, new UserRank(getUserRank()).getElement(), Position.BEFOREEND);
render(pageMainElement, new SiteMenu(getFiltersCount(films)).getElement(), Position.BEFOREEND);
render(pageMainElement, new Sort().getElement(), Position.BEFOREEND);

new PageController(pageMainElement, films).init();

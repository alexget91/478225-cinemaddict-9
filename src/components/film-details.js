import {getHoursFromMinutes} from "../utils";
import AbstractComponent from "./abstract-component";

export default class FilmDetails extends AbstractComponent {
  constructor({poster, title, age, rating, userRating, director, writers, actors, date,
    duration, country, genre, description, isInWatchList, isWatched, isFavorite, comments}) {
    super();
    this._poster = poster;
    this._title = title;
    this._age = age;
    this._rating = rating;
    this._userRating = userRating;
    this._director = director;
    this._writers = writers;
    this._actors = actors;
    this._date = date;
    this._duration = duration;
    this._country = country;
    this._genre = genre;
    this._description = description;
    this._isInWatchList = isInWatchList;
    this._isWatched = isWatched;
    this._isFavorite = isFavorite;
    this._comments = comments;
  }

  getTemplate() {
    return `
      <section class="film-details">
        <form class="film-details__inner" action="" method="get">
          <div class="form-details__top-container">
            <div class="film-details__close">
              <button class="film-details__close-btn js-film-detail-close" type="button">close</button>
            </div>
            <div class="film-details__info-wrap">
              <div class="film-details__poster">
                <img class="film-details__poster-img" src="./images/posters/${this._poster}" alt="${this._title.current}">
      
                <p class="film-details__age">${this._age}+</p>
              </div>
      
              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${this._title.current}</h3>
                    <p class="film-details__title-original">${this._title.original}</p>
                  </div>
      
                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${this._rating}</p>
                    <p class="film-details__user-rating">${this._userRating ? `Your rate ` + this._userRating : ``}</p>
                  </div>
                </div>
      
                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Director</td>
                    <td class="film-details__cell">${this._director}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Writers</td>
                    <td class="film-details__cell">${this._writers}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Actors</td>
                    <td class="film-details__cell">${this._actors}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Release Date</td>
                    <td class="film-details__cell">${new Date(this._date).toLocaleString(`en-GB`, {day: `2-digit`, month: `long`, year: `numeric`})}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${getHoursFromMinutes(this._duration)}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Country</td>
                    <td class="film-details__cell">${this._country}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">${this._genre.size > 1 ? `Genres` : `Genre`}</td>
                    <td class="film-details__cell">
                      ${Array.from(this._genre).map((text) => `<span class="film-details__genre">${text}</span>`).join(``)}
                    </td>
                  </tr>
                </table>
      
                <p class="film-details__film-description">${this._description}</p>
              </div>
            </div>
      
            <section class="film-details__controls">
              <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._isInWatchList ? `checked` : ``}>
              <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
              <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._isWatched ? `checked` : ``}>
              <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
              <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._isFavorite ? `checked` : ``}>
              <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
            </section>
          </div>
          
          <div class="form-details__middle-container" ${this._userRating ? `` : `style="display: none"`}>
            <section class="film-details__user-rating-wrap">
              <div class="film-details__user-rating-controls">
                <button class="film-details__watched-reset" type="button">Undo</button>
              </div>
      
              <div class="film-details__user-score">
                <div class="film-details__user-rating-poster">
                  <img src="./images/posters/${this._poster}" alt="film-poster" class="film-details__user-rating-img">
                </div>
      
                <section class="film-details__user-rating-inner">
                  <h3 class="film-details__user-rating-title">${this._title.current}</h3>
      
                  <p class="film-details__user-rating-feelings">How you feel it?</p>
      
                  <div class="film-details__user-rating-score">
                    ${new Array(9).fill(``).map((value, index) => `
                      <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" 
                          value="${index + 1}" id="rating-${index + 1}" ${this._userRating === index + 1 ? `checked` : ``}>
                      <label class="film-details__user-rating-label" for="rating-${index + 1}">${index + 1}</label>
                    `.trim()).join(``)}
                  </div>
                </section>
              </div>
            </section>
          </div>
          
          <div class="form-details__bottom-container">
            <section class="film-details__comments-wrap">
              <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>
      
              <ul class="film-details__comments-list">
                ${this._comments.map(({text, emoji, author, commentDate}) => `<li class="film-details__comment">
                  <span class="film-details__comment-emoji">
                    <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji">
                  </span>
                  <div>
                    <p class="film-details__comment-text">${text}</p>
                    <p class="film-details__comment-info">
                      <span class="film-details__comment-author">${author}</span>
                      <span class="film-details__comment-day">${new Date(commentDate).toLocaleString(`en-GB`, {day: `2-digit`, month: `2-digit`, year: `2-digit`, hour: `2-digit`, minute: `2-digit`})}</span>
                      <button class="film-details__comment-delete">Delete</button>
                    </p>
                  </div>
                </li>`).join(``)}
              </ul>
      
              <div class="film-details__new-comment">
                <div for="add-emoji" class="film-details__add-emoji-label"></div>
      
                <label class="film-details__comment-label">
                  <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
                </label>
      
                <div class="film-details__emoji-list">
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="sleeping">
                  <label class="film-details__emoji-label" for="emoji-smile">
                    <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                  </label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="neutral-face">
                  <label class="film-details__emoji-label" for="emoji-sleeping">
                    <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                  </label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="grinning">
                  <label class="film-details__emoji-label" for="emoji-gpuke">
                    <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                  </label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="grinning">
                  <label class="film-details__emoji-label" for="emoji-angry">
                    <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                  </label>
                </div>
              </div>
            </section>
          </div>
        </form>
      </section>
    `.trim();
  }
}

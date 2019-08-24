import {getRandomArbitrary, getRandomInt} from './utils';

export const getFilm = () => ({
  title: [
    {
      current: `The Shawshank Redemption`,
      original: `The Shawshank Redemption (Original)`,
    },
    {
      current: `The Green Mile`,
      original: `The Green Mile (Original)`,
    },
    {
      current: `Forrest Gump`,
      original: `Forrest Gump (Original)`,
    },
    {
      current: `Schindler's List`,
      original: `Schindler's List (Original)`,
    },
    {
      current: `Intouchables`,
      original: `Intouchables (Original)`,
    },
    {
      current: `Leon`,
      original: `Leon (Original)`,
    },
    {
      current: `Inception`,
      original: `Inception (Original)`,
    },
    {
      current: `The Lion King`,
      original: `The Lion King (Original)`,
    },
    {
      current: `Fight Club`,
      original: `Fight Club (Original)`,
    },
    {
      current: `Knockin' on Heaven's Door`,
      original: `Knockin' on Heaven's Door (Original)`,
    },
    {
      current: `The Godfather`,
      original: `The Godfather (Original)`,
    },
    {
      current: `Pulp Fiction`,
      original: `Pulp Fiction (Original)`,
    },
    {
      current: `The Prestige`,
      original: `The Prestige (Original)`,
    },
    {
      current: `A Beautiful Mind`,
      original: `A Beautiful Mind (Original)`,
    },
    {
      current: `Gladiator`,
      original: `Gladiator (Original)`,
    },
  ][getRandomInt(0, 15)],
  poster: [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`,
  ][getRandomInt(0, 7)],
  rating: (getRandomArbitrary(1, 9)).toFixed(1),
  userRating: getRandomInt(0, 10), // 0 - нет оценки
  director: [
    `Anthony Mann`,
    `Anne Wigton`,
    `Erich von Stroheim`,
  ][getRandomInt(0, 3)],
  writers: new Array(getRandomInt(1, 5)).fill(``).map(() => [
    `Anthony Mann`,
    `Anne Wigton`,
    `Heinz Herald`,
    `Richard Weil`,
    `Erich von Stroheim`,
    `Mary Beth Hughes`,
    `Dan Duryea`,
  ][getRandomInt(0, 7)]).join(`, `),
  actors: new Array(getRandomInt(1, 5)).fill(``).map(() => [
    `Anthony Mann`,
    `Anne Wigton`,
    `Heinz Herald`,
    `Richard Weil`,
    `Erich von Stroheim`,
    `Mary Beth Hughes`,
    `Dan Duryea`,
  ][getRandomInt(0, 7)]).join(`, `),
  date: Date.now() - getRandomInt(10, 36500) * 24 * 60 * 60 * 1000,
  duration: getRandomInt(10, 240),
  country: [
    `USA`,
    `Russia`,
    `France`,
    `Germany`,
    `Japan`,
  ][getRandomInt(0, 5)],
  genre: new Set(new Array(getRandomInt(1, 5)).fill(``).map(() => [
    `Musical`,
    `Drama`,
    `Western`,
    `Comedy`,
    `Cartoon`,
    `Mystery`,
  ][getRandomInt(0, 6)])),
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`
    .split(`. `)
    .sort(() => Math.random() - 0.5)
    .slice(0, getRandomInt(1, 4))
    .join(`. `),
  age: getRandomInt(0, 26),
  comments: new Array(getRandomInt(0, 5)).fill(``).map(() => ({
    text: [
      `Interesting setting and a good cast.`,
      `Booooooooooring.`,
      `Very very old. Meh.`,
      `Almost two hours? Seriously?`,
    ].sort(() => Math.random() - 0.5).slice(0, getRandomInt(1, 3)).join(` `),
    emoji: [
      `smile`,
      `sleeping`,
      `puke`,
      `angry`,
    ][getRandomInt(0, 4)],
    author: [
      `Tim Macoveev`,
      `John Doe`,
      `Shan Tsung`,
      `Shao Khan`,
      `Sub Zero`,
      `Johny Cage`,
      `Kitana`,
    ][getRandomInt(0, 7)],
    commentDate: Date.now() - getRandomInt(0, 15) * 24 * 60 * 60 * 1000,
  })),
  isInWatchList: Boolean(Math.round(Math.random())),
  isWatched: Boolean(Math.round(Math.random())),
  isFavorite: Boolean(Math.round(Math.random())),
});

export const getUserRank = () => getRandomInt(0, 30);

export const getFiltersCount = (films) => {
  const filtersCount = {
    watchlist: 0,
    watched: 0,
    favorites: 0,
  };

  films.forEach(({isInWatchList, isWatched, isFavorite}) => {
    filtersCount.watchlist += isInWatchList;
    filtersCount.watched += isWatched;
    filtersCount.favorites += isFavorite;
  });

  return filtersCount;
};

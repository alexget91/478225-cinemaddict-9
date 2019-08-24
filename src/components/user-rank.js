const getRankText = (filmsCount) => {
  if (filmsCount > 20) {
    return `Movie Buff`;
  } else if (filmsCount > 10) {
    return `Fan`;
  } else if (filmsCount > 0) {
    return `Novice`;
  }

  return ``;
};

export const createUserRankTemplate = (filmsCount) => {
  return `
    <section class="header__profile profile">
      <p class="profile__rating">${getRankText(filmsCount)}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>
  `.trim();
};

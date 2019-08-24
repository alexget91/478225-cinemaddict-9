export const getHoursFromMinutes = (minutes) => {
  if (minutes > 59) {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  }

  return `${minutes}m`;
};

// Возвращает случайное число между min (включительно) и max (не включая max)
export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Возвращает случайное целое число между min (включительно) и max (не включая max)
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

// Рендер и анрендер для компонент
export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};

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

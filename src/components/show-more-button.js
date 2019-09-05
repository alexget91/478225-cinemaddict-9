import AbstractComponent from "./abstract-component";

export default class ShowMoreButton extends AbstractComponent {
  getTemplate() {
    return `
      <button class="films-list__show-more js-load-more">Show more</button>
    `.trim();
  }

  hide() {
    this._element.style.display = `none`;
  }
}

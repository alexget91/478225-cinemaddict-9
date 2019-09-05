import AbstractComponent from "./abstract-component";

export default class ShowMoreButton extends AbstractComponent {
  getTemplate() {
    return `
      <button class="films-list__show-more js-load-more">Show more</button>
    `.trim();
  }

  toggleShow(show) {
    this._element.style.display = show ? `` : `none`;
  }
}

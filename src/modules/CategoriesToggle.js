export default class CategoriesToggle {
  selectors = {
    root: '[data-js-categories]',
    button: '[data-js-categories-button]',
    item: '[data-js-categories-item]',
  }

  constructor() {
    this.root = document.querySelector(this.selectors.root);
    this.button = document.querySelector(this.selectors.button);
    this.items = Array.from(this.root.querySelectorAll(this.selectors.item));
    this.limit = 6;
    this.expanded = false;

    this.init();
  }

  init() {
    this.updateView();
    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.expanded = !this.expanded;
    this.updateView();
  }

  updateView() {
    this.items.forEach((item, index) => {
      const hidden = !this.expanded && index >= this.limit;

      item.classList.toggle('hidden', hidden);

      item.setAttribute('aria-hidden', hidden.toString());
    });

    this.button.textContent = this.expanded ? 'Close' : 'All categories';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector('[data-js-categories]');
  if (list) {new CategoriesToggle();}
});

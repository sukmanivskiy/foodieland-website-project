class OverlayMenu {
  selectors = {
    root: '[data-js-overlay]',
    overlay: '[data-js-overlay-menu]',
    burgerButton: '[data-js-overlay-burger]'
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = document.querySelector(this.selectors.overlay);
    this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
  }
}

export default OverlayMenu;
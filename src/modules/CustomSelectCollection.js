import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";
import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector.js";

const rootSelector = '[data-js-select]'

class Select {
  constructor(rootElement) {
    this.rootElement = rootElement
    this.config = JSON.parse(
      this.rootElement.getAttribute(getAttrNameFromSelector(rootSelector))
    )
    this.init()
  }

  init() {
    new Choices(this.rootElement, {
      ...this.config,
    })
  }
}

class SelectCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach(element => {
      new Select(element)
    })
  }
}

export default SelectCollection;


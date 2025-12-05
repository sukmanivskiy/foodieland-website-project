export class Print {
  constructor(rootSelector) {
    this.rootSelector = rootSelector
    this.rootElement = document.querySelector(rootSelector)
    this.init()
  }

  init() {
    if(this.rootElement) {
      this.rootElement.addEventListener("click", () => {
        window.print();
      });
    }
  }
}

export class Share {
  constructor(rootSelector) {
    this.rootSelector = rootSelector
    this.rootElement = document.querySelector(rootSelector)
    this.init()
  }

  init() {
    if(this.rootElement) {
      this.rootElement.addEventListener("click", async () => {
        const pageTitle = document.title;
        const pageUrl = window.location.href;

        if (navigator.share) {
          try {
            await navigator.share({
              title: pageTitle,
              url: pageUrl,
            });
            console.log("Page shared successfully");
          } catch (err) {
            console.error("Error sharing:", err);
          }
        } else {
          prompt("Copy this link to share:", pageUrl);
        }
      });
    }
  }
}
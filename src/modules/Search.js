
import { Document } from "flexsearch";
import clsx from "clsx";
import {Image} from "minista";
import AuthorCard from "@/components/AuthorCard/AuthorCard.jsx";

export default class SearchPage {
  constructor({ dataUrl = "/data.json", itemsPerPage = 6 } = {}) {
    this.dataUrl = dataUrl;
    this.itemsPerPage = itemsPerPage;
    this.data = [];
    this.index = new Document({
      tokenize: "forward",
      threshold: 1,
      document: {
        id: "id",
        index: ["linkLabel", "description"] },
    });

    document.addEventListener("DOMContentLoaded", () => this.init());
  }

  async init() {
    this.form = document.querySelector("[data-js-search-form]");
    this.input = document.querySelector("[data-js-search-input]");
    this.resultsContainer = document.querySelector("[data-js-results-container]");
    this.resultsList = document.querySelector("[data-js-results]");
    this.paginationRoot = document.querySelector("[data-js-pagination]");

    await this.loadData();

    if (this.form && this.input) {
      this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    const q = decodeURIComponent(window.location.hash.substring(1))?.trim();
    if (q && this.resultsList && this.paginationRoot) {
      this.input.value = q;
      this.renderSearch(q);
    }
    window.addEventListener("hashchange", () => {
      const q = decodeURIComponent(window.location.hash.substring(1))?.trim();
      if (q) {
        this.input.value = q;
        this.renderSearch(q);
      }
    });
  }

  async loadData() {
    const res = await fetch(this.dataUrl, { cache: "no-cache" });
    this.data = await res.json();
    this.data.forEach(item => {
      this.index.add({
        id: item.id,
        linkLabel: item.linkLabel,
        description: item.description,
        imgSrc: item.imgSrc,
        link: item.link,
        category: item.category,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = this.input.value.trim();
    if (!query) {return;}

    if (this.resultsList && this.paginationRoot) {
      this.renderSearch(query);
      window.location.href = `/search#${encodeURIComponent(query)}`;
    } else {
      window.location.href = `/search#${encodeURIComponent(query)}`;
    }
  }

  search(query) {
    const resultsUrls = this.index.search(query, {
      enrich: true,
    });
    const ids = resultsUrls.map(r => r.result).flat();
    return this.data.filter(d => ids.includes(d.id));
  }

  normalizeUrl(prefix,url) {
    if (!url) {return '#';}

    if (/^https?:\/\//.test(url)) {return url;}

    if (url.startsWith('/')) {return url;}

    if (url.startsWith('recipes/')) {return `/${url}`;}

    if (url.startsWith('blog/')) {return `/${url}`;}

    if (url.startsWith('articles/')) {return `/${url}`;}

    return `/${prefix}/${url}`;
  }

  renderSearch(query, page = 1) {
    const results = this.search(query);
    const total = results.length;
    const pages = Math.ceil(total / this.itemsPerPage);


    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const pageResults = results.slice(start, end);


    this.resultsList.innerHTML = pageResults.map(recipe=>`
      <li class="items-list__item ">
         <div
            class ='search-item content-item '
         >
          <div class="content-item__body ">
            <a
              class='content-item__link h4'
              href="${this.normalizeUrl(recipe.type,recipe.href)}"
            >
              ${recipe.linkLabel}
            </a>
            <div class="content-item__description">
              ${recipe.description}
            </div>
          </div>
      </li>
    `).join("");


    this.renderPagination(pages, page, query);
  }

  renderPagination(pages, current, query) {
    if (!this.paginationRoot) {return;}

    const maxButtons = 5;
    let start = Math.max(current - Math.floor(maxButtons / 2), 1);
    let end = start + maxButtons - 1;

    if (end > pages) {
      end = pages;
      start = Math.max(end - maxButtons + 1, 1);
    }

    let html = "";


    if (current > 1) {
      html += `<button class="pagination-button hidden-mobile-s" data-page="${current - 1}">(</button>`;
    }


    if (start > 1) {
      html += `<button class="pagination-button" data-page="1">1</button>`;
      if (start > 2) {html += `<span class="ellipsis hidden-mobile-s">…</span>`;}
    }

    for (let i = start; i <= end; i++) {
      const activeClass = i === current ? "pagination-button--active" : "";
      html += `<button class="pagination-button ${activeClass}" data-page="${i}">${i}</button>`;
    }

    if (end < pages) {
      if (end < pages - 1) {html += `<span class="ellipsis hidden-mobile-s">…</span>`;}
      html += `<button class="pagination-button" data-page="${pages}">${pages}</button>`;
    }

    if (current < pages) {
      html += `<button class="pagination-button hidden-mobile-s" data-page="${current + 1}">)</button>`;
    }

    this.paginationRoot.innerHTML = html;

    this.paginationRoot.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => this.renderSearch(query, Number(btn.dataset.page)));
    });
  }



}

new SearchPage({ itemsPerPage: 6 });

# STATIC WEBSITE PROJECT — FOODIELAND

Static, high-performance website dedicated to food, cooking, and culinary content.
The project includes a recipe catalog, blog articles, reusable UI components, and optimized static pages generated using Minista SSG.
Built for reliability, fast loading, and long-term maintainability.

##### Live Demo
[Live Demonstration](https://foodieland-website-project.vercel.app/)

![Project image](./public/images/readme_screenshot.jpg)

## Features

- Recipe Catalog:
Structured recipe pages with ingredients, step-by-step instructions, and metadata.


- Blog Section:
Informational and culinary-themed articles with optimized SEO markup.


- Modular UI Components:
JSX-driven reusable UI elements for layout, cards, navigation, and content rendering.


- Static Generation:
All pages are fully pre-rendered into static HTML for top-tier performance.


- Modern Development Stack:
Sass, Vite, Minista, ESLint, Stylelint, and Prettier for clean and stable development.


- Optimized Build:
Minified assets, hashed output, and ideal structure for deployment on any static host.


## Requirements

Before starting development, ensure that your environment has Node.js (v18+ or LTS recommended) installed.

Node.js

Installation and documentation:
https://nodejs.org/

After installation, verify your environment:

```bash
  node --version
```
```bash
 npm --version
```

## Install

    $ git clone https://github.com/sukmanivskiy/foodieland-website-project.git
    $ cd PROJECT
    $ npm install --force

`--force` is used to bypass peer dependency conflicts.
The project uses strict, explicitly defined dependency versions to maintain consistent builds across different environments and ensure stability during development and deployment.


## Start & watch

```bash
  npm run start        
```

## All commands

```bash
  npm run start         # dev-mode start
  npm run build         # build project
  npm run preview       # local build preview
  
  npm run lint:js       # JS code analysis
  npm run lint:js:fix   # JS code autofix
  npm run lint:css      # CSS code analysis
  npm run lint:css:fix  # CSS code autofix
  npm run format        # formatting check
  npm run format:fix    # code formatting
  npm run lint          # full code and formatting check without fixes
  npm run lint:fix      # full code and formatting check with fixes
```

This site is based on a template [create-friendly-frontend](https://www.npmjs.com/package/create-friendly-frontend)
For more details about it visit https://www.npmjs.com/package/create-friendly-frontend

## Project Structure

```
/src
  /components      # reusable JSX UI components
  /layouts         # page templates
  /pages           # static pages, recipe pages, blog routes
  /styles          # Sass stylesheets
  /assets          # images, icons, fonts

/minista.config.js # Minista SSG configuration

```

## Technologies Used
### Minista — Static Site Generator

_A lightweight SSG enabling JSX-driven static rendering and optimized output._
https://minista.qranoko.jp/

### JSX — Markup in JavaScript

_Component-based UI structure, pre-rendered into static HTML._

### Sass — CSS Preprocessor

_Used for modular, maintainable, and scalable styling._

### Vite — Modern Build Tool

_Fast development server and optimized bundling for production._

### Linters & Code Style

* _ESLint — JavaScript linting_
* _StyleLint — CSS linting_
* _Prettier — code formatting_

## Deployment

The project outputs a fully static build (/dist) that can be deployed to any static hosting provider, including:

* Netlify
* GitHub Pages
* Vercel (static mode)
* Cloudflare Pages
* Any CDN/static file server

# STATIC WEBSITE PROJECT
##### Project [Live Demonstration]()

## Requirements

For development, you will need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation
To install [Node](http://nodejs.org/) visit official site http://nodejs.org/

<br>
## Install

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install --force

Use --force command to resolve peer dependencies conflict.This project uses explicitly defined package versions to prevent dependency conflicts and ensure consistent, repeatable builds across different environments. By locking dependencies to known-stable versions, we minimize unexpected behavior during development, testing, and deployment, leading to a more predictable and maintainable workflow.
<br>
<br>
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
<br>
<br>
## Languages & tools

### [Minista](https://minista.qranoko.jp/) Static Site Generator

Minista is a lightweight static site generator that lets you build fully static websites using JSX, Markdown, and modern JavaScript. It compiles components and content into optimized HTML, CSS, and JS, producing fast, maintainable, and deployment-ready sites.
<br>
### [JSX](https://react.dev/learn/writing-markup-with-jsx) Java Sript syntactic extension

JSX allows you to write HTML-like components directly in JavaScript. These components can be pre-rendered into static HTML during the build process, producing a fully static site with modular, reusable, and maintainable code.
<br>
###[Sass](https://sass-lang.com/) CSS Preprocessor

Sass is a powerful CSS preprocessor that adds variables, nesting, mixins, and functions to standard CSS. It helps write more maintainable, reusable, and organized stylesheets, which are then compiled into standard CSS for the browser.
### [Vite](https://vite.dev/) Build Tool
<br>
Vite is a fast, modern build tool and development server for JavaScript projects. It provides instant module hot-reloading during development and produces optimized, production-ready builds with minimal configuration, making development and deployment faster and more efficient.
<br>

### Linters and formatters 

- [ESLint](https://eslint.org/) JavaScript code linter
- [StyleLint](https://stylelint.io/) CSS code linter
- [Prettier](https://prettier.io/) code formatter
# Online Shop CA

<!-- A simple overview of use/purpose. -->

Noroff Course Assignment for Javascript Frameworks.

- [Brief](docs/.pdf)
- [Criteria](docs/.pdf)

- [Design Prototype Desktop]()
- [Design Prototype Mobile]()
- [Style Guide]()
- [Repository]()
- [Hosted Demo]()

## Live app

This project is deployed on [Netlify]().

## Description

<!-- An in-depth paragraph about your project and overview of use. -->

The main purpose of this CA is to take the skills learned of React to build an eCom store.

- CSS framework `Tailwind`,
- REST API advanced features like GET, POST, PUT, DELETE
- array functions: `filter`, `map`, `forEach`
- destructuring
- `JWT` token and API authorization concepts
- usage of `local storage`
- `Vite` bundler
- effective workflow via `Eslint`, `Prettier`, commit hooks (`Husky`)
- security concepts (`Dompurify`)
- `.env` file to manage secrets for local development

- responsive design (concepts, media queries, etc)
- DRY (structured code, etc)
- accessibility concepts (WCAG)
- developer tools (VS Code, Prettier, DevTools, Github, Postman, etc)
- code validation tools

## API

- The API used in this project can be found under Online Shop Endpoints in the Noroff API documentation. [v2](https://docs.noroff.dev/docs/v2).
- Online Shop API routes require both a JWT token and an API Key.

## Feature implemented

- unregistered user can view and search through Products
- user can:
  - view the individual product page
  - view the current number of items in the cart by Card icon
  - add a product to card
  - view in the Cart page a list all of the products as well as a total if there are any
  - view the normal price and the discount price, if there are any
  - view notification message in the checkout page as well as a link that lets a user go back to the store
  - contact the store by contact form
  - search and filter products through an advance look-ahead search (auto-complete search bar)

<!-- - Describe any prerequisites, libraries, OS version, etc., needed before installing the program.
- ex. Windows 10 -->

## Validation

The web application code has been validated using the following tools:

- check html validity: <https://validator.w3.org/>
- check css validity: <https://jigsaw.w3.org/css-validator/>
- check redirect links: <https://validator.w3.org/checklink>
- check accessibility: <https://www.accessibilitychecker.org/>

## Dependencies

To develop the web application I have used `Visual Studio Code` with `Prettier` formatter extension.

> npm install
> npm run dev

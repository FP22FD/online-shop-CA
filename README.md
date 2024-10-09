# Online Shop CA | React & Tailwind

<!-- A simple overview of use/purpose. -->

This project is a Course Assignment for JavaScript Frameworks at Noroff, focused on building a functional eCommerce store using React.

- [Brief](docs/brief.pdf)
- [Criteria](docs/criteria.pdf)

- [Repository](https://github.com/FP22FD/online-shop-CA)
- [Hosted Demo on Netlify](https://onlineshop-ca.netlify.app/)

## Description

<!-- An in-depth paragraph about your project and overview of use. -->

The primary goal of this project is to apply React skills to create a robust eCommerce platform.
The application showcases several modern web development techniques and tools, enhancing both user experience and code quality.

### Key Features and Technologies

- CSS framework: make use of `Tailwind` CSS for rapid styling and responsive design.
- REST API: Implements basic API features, primarily focusing on GET requests for retrieving product data.
- React topics: `useState`, `useEffect` and `AbortController`, `custom hooks`, `useContext`.
- Javascript Techniques:
  - Array functions: `filter`, `map` and `reduce`.
  - Destructuring for cleaner code
  - Development Tools: Uses `Vite` as the bundler and follows a streamlined workflow with tools like `Eslint` and `Prettier`
  - Unit testing: leverage `vitest` for unit tests and `browser/DOM` testing.

### Development Practices

- Responsive Design: Ensures optimal user experience across devices using media queries.
- Code Quality: Follows `DRY principles` (Don’t Repeat Yourself) for structured and maintainable code.
- Accessibility: Adheres to `WCAG` (Web Content Accessibility Guidelines) standards for improved accessibility.
- Developer Tools: Utilizes tools such as `VS code`, `DevTools`, `GitHub`, and `Postman` for development and testing.
- Code Validation: Employs validation tools to ensure standards compliance.
- Vertical Slices: The folder structure is organized by feature, each with its own components, styles, and tests for easier management.
- Mobile First: The design prioritizes mobile responsiveness, ensuring an optimal experience on mobile devices before adapting to larger screens.

## API

- The application interacts with the Online Shop API. The API documentation can be found [here](https://docs.noroff.dev/docs/v2).
- Online Shop API routes don't require authentication (for example: JWT token and an API Key).

## Feature implemented

- user can:
  - view and search through Products
  - Use an advanced look-ahead search feature for products.
  - Check the number of items in the cart via the cart icon.
  - view the individual product page.
  - add a product to cart.
  - View a detailed cart page with product listings and totals.
  - Check for normal and discounted prices.
  - Receive notification messages on the checkout page with navigation options.
  - Contact the store via a contact form.

<!-- - Describe any prerequisites, libraries, OS version, etc., needed before installing the program.
- ex. Windows 10 -->

## Validation

The web application code has been validated using the following tools:

- [check html validity](https://validator.w3.org/)
- [check css validity](https://jigsaw.w3.org/css-validator/)
- [check redirect links](https://validator.w3.org/checklink)
- [check accessibility](https://www.accessibilitychecker.org/)

## Development Environment

To set up the development environment:

1. Ensure you have Node.js installed (> 20).
2. Clone the repository.
3. Run the following commands

```console
> npm install
> npx vitest init browser
> npm run dev
```

## Resource

Icons: [React Icons](https://react-icons.github.io/react-icons/icons/io5/)

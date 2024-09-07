# URL Shortener

## Project overview

The URL Shortener app allows users to easily shorten any valid URL, store and manage a list of shortened links, and copy them to their clipboard with a single click. The application ensures an optimal layout across different screen sizes and provides error handling for invalid input.

## Features

- The user can view the optimal layout for the page for most used widths (more details below)
- The user can shorten any valid URL to https://tinyurl.com/2s4abc2x, where 2s4abc2x is 8 chars path that is randomly created for each link
- The array of shortened URLs is stored in the local storage so that the user can view previously shortened URLs
- The user can delete the shortened link from the array in local storage
- The user can copy the shortened link to their clipboard in a single click
- The user receives an error message when the `form` is submitted if:
  - The `input` field is empty
  - The provided input is not a link

## Further Application Development Plans

- Cypress Tests
- Building a server and adding a database
- Adding Login and Registration functionality with authentication


## Technologies

- HTML
- CSS
- React
- Typescript
- React Router
- Vite
- TinyUrl Api
- Cypress
- Netlify

## Application View

<img src="/src/assets/images/Screenshot.png" alt="Desktop">

<img src="/src/assets/images/Screenshot shortener links.png" alt="Link">

## Getting Started

You can either run the project locally on your machine or simply visit the live version of the app:

https://url-shortener-apps.netlify.app/

### Local Installation (Optional)

If you want to run the project locally on your machine, you will need:

- A web browser
- An internet connection
- Node.js
- Yarn or npm

To install the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Wojciech-Podlesny/URL-Shortener`
2. Navigate to the project directory: `cd url-shortener`
3. Install the dependencies: `yarn install` or `npm install`
4. Start the development server: `yarn run dev` or `npm run dev`
5. Open your browser and visit `http://localhost:3000` to view the app

## Run Cypress Tests

To run the Cypress tests, follow these steps:

1. Ensure the development server is running` yarn run dev` or `npm run dev`
2. Open Cypress: `yarn run open` or `npm run open`
3. In the Cypress window, click on a test to run it.

## Author

Developed by [Wojciech Podleśny](https://github.com/Wojciech-Podlesny)

## License

This project is licensed under the ISC license.

# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Features

- The user can view the optimal layout for the page for most used widths (more details below)
- The user can shorten any valid URL to https://tinyurl.com/2s4abc2x, where 2s4abc2x is 8 chars path that is randomly created for each link
- The array of shortened URLs is stored in the local storage so that the user can view previously shortened URLs
- The user can delete the shortened link from the array in local storage
- The user can copy the shortened link to their clipboard in a single click
- The user receives an error message when the `form` is submitted if:
  - The `input` field is empty
  - The provided input is not a link

### Further Application Development Plans

- Cypress Tests
- Building a server and adding a database
- Adding Login and Registration functionality with authentication and authorization

### Screenshot

![Destop Design]()
![Mobile Design]()


### Links

- Solution URL: [Solution URL](https://github.com/Wojciech-Podlesny/URL-Shortener)
- Live Site URL: [Live Site URL]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Typescript
- React Router
- Vite
- React
- Vercel
- TinyURL API
- Cypress 


### Prepared for widths:

- 1440px+
- 1440px
- 1024px
- 768px (tablet)
- 425-320px (mobile)

## Author

- Frontend Mentor - [@Wojciech-Podleśny](https://www.frontendmentor.io/profile/Wojciech-Podlesny)
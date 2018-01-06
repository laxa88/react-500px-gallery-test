# Introduction

This is a coding evaluation test project using React and the 500px image gallery API (https://github.com/500px/api-documentation)

# Design

## Basic functional requirements

- Display the photos loaded from the API in a grid containing 3 images in a row
- Ability to filter based on category
- Search functionality
- Pagination

## Nice to have

- Responsiveness
- Infinite/Continuous Scroll (not implemented)
- Use module bundler (e.g. webpack)
- Use ES6 syntax
- Add tests

# Developer guide

## 500px requisites

In order to use the 500px API, developers need to register and obtain the `consumer_secret`, which is required when calling API endpoints.

## Local development requisites

- NodeJS: 6.11.3
- NPM: 3.10.10
- IDE: Visual Studio Code
- ESLint: 4.14.0

For other dependencies, refer to `package.json`

## Development setup

- Clone the git project, i.e.:
```
git clone https://github.com/laxa88/react-500px-gallery-test.git
```
- Navigate to the project folder, then:
  - First, install dependencies:
  ```
  npm install
  ```
  - To run the app in development mode, run:
  ```
  npm start
  ```
  - To build the app for release (minified bundle.js), run:
  ```
  npm run build
  ```
  - To run the test (jest) server, run:
  ```
  npm test
  ```

After `npm start` is run, open your browser and navigate to the hosted server (default: `http://localhost:8080/`)
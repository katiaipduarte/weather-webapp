# Weather WebApp

Welcome to my Weather App, where you can enter a location to fetch the current weather or see the weather in you current location. You can also add a new city to the favourites, and also delete it.

Demo at: [weather-webapp-three.vercel.app](http://weather-webapp-three.vercel.app)
Project board: [https://github.com/katiaipduarte/weather-webapp/projects/1](https://github.com/katiaipduarte/weather-webapp/projects/1)

App created using [Next.js 12](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [styled-components](https://styled-components.com/), [redux](https://redux.js.org/), [redux toolkit](https://redux-toolkit.js.org/), [firebase](https://firebase.google.com/) and for testing [Jest](https://jestjs.io/). Thank you for using my app.

**Note:** To run this project be sure to have a Node version installed that is 12.x or higher

## Table of Contents

- [Installation](#installation)
  - [Realtime Database](#realtime-database)
  - [API Keys](#api-keys)
- [Future Work](#future-work)
- [Contributing](#contributing)
- [License](#license)
- [Folder Structure](#folder-structure)
- [Environment variables](#environment-variables)
- [Available Scripts](#available-scripts)
  - [npm run install:npm](#npm-run-installnpm)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
  - [npm run lint](#npm-run-lint)
  - [npm run format](#npm-run-format)
  - [npm run test](#npm-run-test)
  - [npm run test:watch](#npm-run-testwatch)
  - [npm run test:coverage](#npm-run-testcoverage)

## Installation

To use this app, first clone from GitHub via 'git clone https://github.com/katiaipduarte/weather-webapp' at your terminal, `cd` to the new directory, then run `npm install`. Before running this project, you will need to create a `.env.local` file, with the same env as the ones in the `.env.example`. At last, run `npm run dev` to launch your http server.

### Realtime Database

This project uses a realtime database to save the favourite locations. The selected was firebase for the easy of use and integration.
You will need to create a firestore database with the collection favourites with the following structure:

```
{
  "lat": number,
  "lon": number,
  "city": string,
  "name": string
}
```

### API Keys

This project is connected to 2 external API.

- Weather data fetched from OpenWeatherMap API, you can sign-up for a FREE API key at https://openweathermap.org/.
- Location related data are fetched by using 1 external API's, and you can sign-up for a FREE API key at https://rapidapi.com/marketplace.
  - [Spott API](https://www.spott.dev/), to create the search bar.

## Future Work

[ ] Add more unit tests and e2e ones<br>
[ ] Add authentication, to allow multiple users with different favourite locations<br>
[ ] Add better caching <br>
[ ] Add different background and card images, taking into account the location selected<br>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/katiaipduarte/weather-webapp. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

The code is available as open source under the terms of the MIT License.

## Folder Structure

```
weather-webapp/
    .husky/
    .vscode/
    components/
        common/
        templates/
    constants/
    firebase/
    interfaces/
    mocks/
    pages/
    public/
    services/
    store/
    styles/
    utils/
```

For the project to build, **these files must exist with exact filenames**:

- `.husky` folder containing git hooks for pre-commit and pre-push.
- `.vscode` folder containing rules to help start development faster while using vscode.
- `components` is the folder that houses all the components used. It's divided for now into 2 modules.
  - `common`: components that are used all the time when we render a page.
  - `templates`: pages templates.
- `constants` is the folder with all the enums or const objects used in the components.
- `firebase` this folder only contains one file with initialize for firebase.
- `interfaces` is the folder with all the interfaces/type files used in the components.
- `mocks` is the folder with all the mock data need for unit testing.
- `pages` is the folder that contains the files with the initial logic used for each route.
- `public` the folder only contains the favicon images.
- `services` is the folder for all the services.
- `store` is the folder with the redux logic.
- `style` is the folder with reset, themes and any other style rules shared by all components.
- `utils` is the folder with helper functions.

## Environment variables

NEXT_PUBLIC_API_KEY=

NEXT_PUBLIC_LOCATION_API_KEY=

NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID =

## Available Scripts

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run start`

Runs the app in the production mode.<br />
Open [http://localhost](http://localhost) to view it in the browser.

### `npm run lint`

Automatic linting, with rules to work with TypeScript and React. The `node_modules` and `e2e` folders are not included.

This is runned each time you do a commit and a push it to your branch.

For more information see the [ESLint documentation](https://eslint.org/).

### `npm run format`

Command to format the code according to the rules that can be found in `.prettierrc`. The `node_modules` and `e2e` folders is not included.

This will be automatically run each time you do a commit.

For more information see the [Prettier documentation](https://prettier.io/).

### `npm run test`

Runs all the tests founded.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Launches the test runner in the interactive watch mode and shows a report with the code coverage for each component.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

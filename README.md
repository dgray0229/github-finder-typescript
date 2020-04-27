# Github Finder - Typscript, Jest, and Enzyme

This project is a beefed-up take on Brad Traversy's React Course Project. As a refresher on React, I decided to quickly build this project, but also use the time to teach myself Typescript, Jest, and Enzyme to practice writing better, safer, more production-ready code. 

This project was developed in four phases, each has their own branch.

## Phase 1

Basic layout. Most everything is in a class-based component. There isn't much state and props moving around. Our data is also pulled statically from a JSON file. It's just the main UI and loading data

## Phase 2

I expand on the functionality and add functional components. We have some state in my main App component, and my child components access and change that state through props and prop methods. We also start using stateless functional components, both refactoring some components to be functional and creating new ones. Finally, we use axios to begain making API calls to Github and setup our api information.

## Phase 3

Here we start really moving everything into my main App component, and have all of my state be passed down as props. We also implement React Router to change routes based on the home, about, and /:user specific pages. We dynamically generate pages based on the URL paramaters and get that user information from different Github API calls using async/await

## Phase 3.5

Here is where I really deviated from the tutorial. Although I already had to change quite a bit of the project to work with Typescript. I created this mini-phase to add some testing to a lot of the main components. Our main app component mock tests our getUsers function, I refactored the API calls for better error handling, I started with a lot of snapshot testing but decided to limit it to only mostly static pages like the about and navbar components. 

I also use enzyme to test my serchbar to make sure that the value of the input alwas matches our internal query state, and that our repos properly display passed-down data in the correct places.

## Phase 4

This final fase improves and expands on some of the testing, as well as implements React Hooks and the React Context API. We use these to better manage our app state and avoid prop-drilling, but since this is a small project and App state doesn't have to travel that far, we don't need the extra boilerplate and code weight of a flux library like Redux. We also use react refs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

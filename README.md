## Project URL

CI/CD tool: travis ci
Hosting: AWS Elastic Beanstalk

http://productreview-env-1.eba-ge2usyye.eu-west-1.elasticbeanstalk.com/

## Potential future work

- Delete individual comment.
  - This would require giving each comment an ID and creating a redux action to update the store. Removing the comment with the matching ID.
- Possible improvement, accessibility on chart. Currently the chart is not keyboard accessible.

## Tech choices

- Redux state management
  - Lightweight state management tool to easily add comments to a store and be read from across the tree.
  - Pros: Easy to test, call simple actions to update state
  - Cons: Means installing a 3rd party package increasing bundle size
- @material-ui/lab rating component
  - Whilst a large package to install requiring @material-ui/core package.
  - Material-ui's rating system was the only component that offered a keyboard accessible rating system.
- react-chartjs-2
  - Offered an easy to use, customisable informative doughtnut style chart.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

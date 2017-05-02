# Boilerplate for creating React-component npm packages with ES2015

Starter point for React components that you want to be published on Npm.

Bundled with [Webpack 2](https://webpack.js.org/)

It includes linting with [ESLint](http://eslint.org/) and testing with [Jest](http://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/).

Documentation heavy inspired by [Julian Ćwirko](https://github.com/juliancwirko) and the [https://github.com/juliancwirko/react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate) package.

## Usage
Im using yarn but just replace with npm if you want.
1. Install module as global `yarn global add react-npm-component-boilerplate` or `npm install -g react-npm-component-boilerplate`
2. Update `package.json` with your package name.
3. If you want to run tests: `yarn run test` or `npm run test-watch`. You need to write tests in `__tests__` folder or as `.test.js`.
4. If you want to run linting: `yarn run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
5. If you want to run test: `yarn run test`
6. Bundle with `yarn run build`
7. Or production build with `yarn run production`
8. If you wan to test if it works correctly in another project you can use npm `npm install -S ../react-npm-component-boilerplate` Note the relative path
E.g. this folder structure
 
    
    ./workspace/
        MyProject
        react-npm-boilerplate

## License

MIT
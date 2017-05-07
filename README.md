[![Travis](https://travis-ci.org/lindgr3n/react-npm-component-boilerplate.svg?branch=master)](https://travis-ci.org/lindgr3n/react-npm-component-boilerplate.svg?branch=master)

# Boilerplate for creating React-component npm packages with ES2015

Starter point for React components that you want to be published on Npm.

Bundled with [Webpack 2](https://webpack.js.org/)

It includes linting with [ESLint](http://eslint.org/) and testing with [Jest](http://facebook.github.io/jest/).

Documentation heavy inspired by [Julian Ćwirko](https://github.com/juliancwirko) and the [https://github.com/juliancwirko/react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate) package.

## Usage
Im using yarn but just replace with npm if you want.
1. Install module as global `yarn global add react-npm-component-boilerplate` or `npm install -g react-npm-component-boilerplate`
2. Create your template `react-npm-component-boilerplate your-component-name` 
3. Step into your created template `cd your-component-name`
4. Update `package.json` with your package name.
5. Install modules with `yarn` or `npm install` 

* If you want to run tests: `yarn test` or `npm run test`. You need to write tests in `__tests__` folder or as `.test.js`.
* It you want to watch run: `yarn test-watch` or `npm run test-watch`
* If you want coverage run: `yarn test-coverage` or `npm run test-coverage`
* If you want to run linting: `yarn lint` or `npm run lint`. 
* If you want to fix bugs: `yarn lint-fix` or `npm run lint-fix`. You can adjust your `.eslintrc` config file.

#### To test your created component in another project
If you wan to test if it works correctly in another project you can use npm `npm install -S ../mytest-component` Note the relative path and name of module
E.g. this folder structure
 
    ./workspace/
        MyProject
        react-npm-boilerplate

## License

MIT
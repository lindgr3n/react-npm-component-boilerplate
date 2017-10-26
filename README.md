[![Travis](https://travis-ci.org/lindgr3n/react-npm-component-boilerplate.svg?branch=master)](https://travis-ci.org/lindgr3n/react-npm-component-boilerplate.svg?branch=master)

# Boilerplate for creating React-component npm package with ES2015

Starter point for creating [React](https://facebook.github.io/react/) components that you can published on Npm.

* Bundled with [Webpack](https://webpack.js.org/)
* Develop with Hot Module Replacement [(HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
* Includes linting with [ESLint](http://eslint.org/)
* Testing with [Jest](http://facebook.github.io/jest/).

**Updated to use Webpack 3, Jest 21 and React 16!**

## Usage

1. Install module as global 
    > yarn global add react-npm-component-boilerplate

2. Create your template 
    > react-npm-component-boilerplate your-component-name
    
    * Or if you want to autoset links in package.json add username 
    > react-npm-component-boilerplate -u your-github-username your-component-name

3. Step into your created template 
    > cd your-component-name

4. Check **_package.json_** so that the information is correct.

5. Install modules with 
    > yarn

6. Start example and start coding! 
    > yarn start

___
### Extra
* If you want to run tests: 
    > yarn test 
* You need to write tests in `__tests__` folder or as `.test.js`.
* It you want to keep watch run: 
    > yarn test-watch
* If you want coverage run: 
    > yarn test-coverage
* If you want to run eslint: 
    > yarn lint
* If you want to automatically fix lint problems run :
    > yarn lint-fix

    Adjust your `.eslintrc` config file to your own preference.

## NPM equivalent
yarn | npm
---- | ---
`yarn global add react-npm-component-boilerplate` | `npm install -g react-npm-component-boilerplate`
`yarn` | `npm install`
`yarn test` | `npm run test`. 
`yarn test-watch` | `npm run test-watch`
`yarn test-coverage` | `npm run test-coverage`
`yarn lint` | `npm run lint`
`yarn lint-fix` | `npm run lint-fix`

____

### To test your created component in another project

If you want to test if it works correctly in another project you can use npm `npm install -S ../mytest-component` Note the relative path and name of module
E.g. this folder structure
```
    ./workspace/
        MyProject
        react-npm-boilerplate
```

## License

MIT

____
### Credit
Documentation is inspired by [Julian Ćwirko](https://github.com/juliancwirko) and the [https://github.com/juliancwirko/react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate) package.
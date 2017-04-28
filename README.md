# Boilerplate for creating React-component npm packages with ES2015

My first open source project. Be nice :)

The package is based on [react-npm-component-boilerplate](https://github.com/lindgr3n/react-npm-component-boilerplate) package by [Johan](https://github.com/lindgr3n) which is really great when you want to set up npm package. This one is prepared to be used as a starter point for React components which needs to be published on Npm.

Bundled with [Webpack 2](https://webpack.js.org/)

It includes linting with [ESLint](http://eslint.org/) and testing with [Jest](http://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/).

Also there is of course ES6 transpilation.

Documentation heavy inspired by [Kadira](https://github.com/kadirahq) and the [npm-base](https://github.com/kadirahq/npm-base) package.

## Usage
Im using yarn but just replace with npm if you want.
1. Clone this repo
2. Inside cloned repo run `yarn install && rm -rf .git && git init` and update `package.json` with your package name.
3. If you want to run tests: `yarn run test` or `yarn run testonly` or `npm run test-watch`. You need to write tests in `__tests__` folder or as `.test.js`.
4. If you want to run linting: `yarn run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
5. If you want to run test: `yarn run test`
6. Bundle with `yarn run build`
7. Or production build with `yarn run production`
8. If you wan to test if it works correctly in another project you can use npm `npm install -S ../react-npm-component-boilerplate` Note the relative path
E.g. this folder structure
 
    
    ./workspace/
        MyProject
        react-npm-boilerplate
        
9. TODO: how to publish package
 
## Blog post about it:

- [Creating React NPM packages with ES2015 and Webpack 2](https://LINK TO GITHUB PAGE)

## Also check out

- [React Cookie-Notification component](https://github.com/lindgr3n/react-cookie-notification)
Built by using this package

## License

MIT

## Good to know
As of now you need to install react-test-renderer to skip warnings from jest: 

`yarn add -D react-test-renderer` 

**Source:** https://github.com/airbnb/enzyme/issues/875

Will get some error like this:

    `console.error node_modules/fbjs/lib/warning.js:36
        Warning: ReactTestUtils has been moved to react-dom/test-utils. Update references to remove this warning.
        console.error node_modules/fbjs/lib/warning.js:36
        Warning: Shallow renderer has been moved to react-test-renderer/shallow. Update references to remove this warning.`
   

## TO DO
* Publish to github
* Connect to CI
* badge
* Update githubpage with information
* Remove converage folder at publish
* Clear dist folder before build
* Clear node_module folder at publish
* Do i have any uneccessary packages?
* Do i need vendor and manifest? Try just vendor
./index.js need correct require vendor, manifest my just vendor?
* Update tests
* Update license?
* Better way of handling config/jest *Transform files or polyfills?
* Eslint working?
* Watch for updates test
* Move jest configuration from package.json  
* Make so you can create a skeleton from this package as a global dependecy
instead of clone and remove git references.

## Resources
* http://kloc.io/setting-up-react-workflow-babel-webpack/
* https://facebook.github.io/jest/docs/webpack.html
* https://webpack.js.org/guides/code-splitting-libraries/#manifest-file
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const directory_name = process.argv[2];
const args = process.argv.slice(3);

const source = __dirname;
const source_template = path.join(source, '../react-npm-component-boilerplate');
const destination = path.resolve(directory_name);
const appName = path.basename(destination);

// TODO: Validate name (https://github.com/npm/validate-npm-package-name)
fs.ensureDirSync(directory_name);

console.log("Source: " + source);
console.log("Source: " + source_template);
console.log("AppName: " + appName);
console.log(`Creating a component in ${chalk.green(destination)}`);

// TODO: Validate so files already exist
// Copy template files to specified directory
fs.copySync(source_template, destination);

console.log(`Done copying files to ${chalk.green(destination)}`);

// TODO: Run yarn/npm install
/*
 Validation Node version

 Copy ./react-npm-component-boilerplate
 Update package.json
 Update webpackconfig (If its not possibly to update libaryname som other way

 */

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const packageJson = require('../package.json');

let directory_name = process.argv[2];
const args = process.argv.slice(3);

if(!directory_name) {
    console.log();
    console.error('Please specify the project directory:');
    console.log(`  ${chalk.cyan(packageJson.name)} ${chalk.green('<directory>')}`);
    console.log();
    console.log('For example:');
    console.log(`  ${chalk.cyan(packageJson.name)} ${chalk.green('my-component')}`);
    console.log();
    console.log(`Run ${chalk.cyan(`${packageJson.name} --help`)} to see all options.`);
    console.log();
    process.exit(1);
}

switch (directory_name) {
    case '--help':
        console.log();
        console.log(`Create a new component by using ${chalk.green(packageJson.name)} ${chalk.green('my-component')}.`);
        console.log(`Got a problem please file an issue at ${chalk.cyan(`${packageJson.bugs.url}`)}.`);
        process.exit(1);
        break;
    default:
        break;
}

const source = __dirname;
const source_template = path.join(source, '../react-npm-component-boilerplate');
const destination = path.resolve(directory_name);
const appName = path.basename(destination);

// TODO: Validate name (https://github.com/npm/validate-npm-package-name)
// Validate foldername
fs.ensureDirSync(directory_name);

console.log("AppName: " + appName);
console.log(`Creating boilerplate in ${chalk.green(destination)}`);

// TODO: Validate so files already exist
// Copy template files to specified directory
fs.copySync(source_template, destination);

console.log(`Done copying files! ${chalk.green('Happy Coding!')}`);

// TODO: Run yarn/npm install
/*
 Validation Node version

 Copy ./react-npm-component-boilerplate
 Update package.json
 Update webpackconfig (If its not possibly to update libaryname som other way

 */

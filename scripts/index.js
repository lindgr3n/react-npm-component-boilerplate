const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const commander = require('commander');

const packageJson = require('../package.json');

let directory_name;

const program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments('<project-name>')
    .option('-u, --username <username>', 'Github username to autopopulate links i package.json')
    .description('Boilerplate to generate files needed to create a react component.')
    .action(name => {
        directory_name = name;
        console.log(`${chalk.cyan(directory_name)}`);
    });

    program.on('--help', function(){
        console.log('  Examples:');
        console.log('');
        console.log(`    $ ${chalk.cyan(packageJson.name)} ${chalk.green('my-component')} `);
        console.log(`    $ ${chalk.cyan(packageJson.name)} -h`);
        console.log('');
        console.log(`Got a problem please file an issue at: `);
        console.log(`${chalk.cyan(`${packageJson.bugs.url}`)}`);
        console.log('');
    });

program.parse(process.argv);   // Define commands and their options

if(typeof directory_name === 'undefined') {
    console.log();
    console.error('Please specify the project directory:');
    console.log(`  ${chalk.cyan(packageJson.name)} ${chalk.green('<project-name>')}`);
    console.log();
    console.log('For example:');
    console.log(`  ${chalk.cyan(packageJson.name)} ${chalk.green('my-component')}`);
    console.log();
    console.log(`Run ${chalk.cyan(`${packageJson.name} --help`)} to see all options.`);
    console.log();
    process.exit(1);
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

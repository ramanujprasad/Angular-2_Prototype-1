# Angular 2 Sample Example

This repository holds the TypeScript source code of the sample angular 2 application,

It has basically full CRUD operation developed using angular 2

It exists primarily to get you started quickly with learning and prototyping in Angular 2

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

Its recommended [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
```
## Start the application

```shell
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Application will start on http://localhost:3000/

Shut it down manually with `Ctrl+C`.

You're ready to write your application.
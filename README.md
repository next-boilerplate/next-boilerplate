# Create Next App CLI

create-next-app-cli is a command line interface (CLI) for easily creating [Next.js](https://github.com/zeit/next.js) apps in one command. It come with default, material and semantic templates and Next.js examples.
  
Official Website: [https://create-next-app.github.io](https://create-next-app.github.io/)

[![NPM](https://img.shields.io/npm/v/create-next-app-cli.svg)](https://www.npmjs.com/package/create-next-app-cli)

Create Next App CLI with no build configuration:

  - [Creating an App](#creating-an-app) – How to create a new Next.js app.
  - [User Guide](https://nextjs.org/docs/) – How to develop apps bootstrapped with Create Next App.

## Features

  - Templates ( default, material and semantic )
  - Next.js examples

## Installing create-next-app CLI

create-next-app-cli is available on npm:

```
npm install --global create-next-app-cli
```

create-next-app-cli is available on yarn as well:

```
yarn add create-next-app-cli
```

You don't need to install or setup Webpack or Babel. They come with Next.js, so you can just start coding after running `create-next-app`.

## Creating an App

Create a new Next.js app with `default` or `material` or `semantic` templates:

```
create-next-app my-app --template default
```

It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
.
├── README.md
├── components
│   ├── head.js
│   └── nav.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── index.js
├── static
│   └── favicon.ico
└── yarn.lock
```

No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:

```
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm run dev` or `yarn dev`

Runs the app in development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

Out of the box, we get:

  - Automatic transpilation and bundling (with webpack and babel)
  - Hot code reloading
  - Server rendering and indexing of `./pages`
  - Static file serving. `./static/` is mapped to `/static/`

### `npm run build` or `yarn build`

Builds the app for production to the `.next` folder.<br/>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start` or `yarn start`

Starts the application in production mode. The application should be compiled with `npm run build` first.

Now you maybe ready to code and deploy your app!

## Starting Next.js Examples

There are a bunch of examples in the Next.js repository that you can use to bootstrap your app.

To bootstrap your app with example:

1. Go to [https://create-next-app.github.io](https://create-next-app.github.io/#examples)
2. Choose an example to bootstrap your app (such as basic-css)
3. And then run `create-next-app my-app --example basic-css`
4. Well done!

## User Guide

You can find detailed instructions on using Next.js and many tips in [its documentation](https://nextjs.org/docs/).

## License

Create Next App CLI is open source software [licensed as MIT](https://github.com/themodernjavascript/create-next-app-cli/blob/master/LICENSE).

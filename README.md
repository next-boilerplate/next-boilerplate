# Create Next App [![NPM](https://img.shields.io/npm/v/create-next-app-cli.svg)](https://www.npmjs.com/package/create-next-app-cli)

Create Next App allows you to create a [Next.js](https://nextjs.org) app by running one command. It come with default, material, bootstrap and semantic templates and Next.js examples.

Create Next App with no build configuration.

  * [Create a Next App](#create-a-next-app-in-seconds) – How to create a new app.
  * [Start Next Examples](#start-next-examples) – How to bootstrap a new app with Next.js example.

## Features

You can create a Next.js app by running one command with no build configuration that come with following features:

  - Templates (default, material, bootstrap and semantic)
  - Next.js examples

## Install

To use create-next-app command line interface you have to install `create-next-app-cli`.

create-next-app-cli is available on npm. It can be installed with the following command:

```
npm install --global create-next-app-cli
```

create-next-app-cli is available on yarn as well. It can be installed with the following command:

```
yarn global add create-next-app-cli
```

You don't need to install or setup Webpack or Babel. They come with Next.js, so you can just start coding after running create-next-app command line.

## Create a Next App in seconds

To create a new Next.js app called <i>my-app</i> with `default` or `material` or `bootstrap` or `semantic` templates.

1. Go to [Create Next App templates](https://create-next-app.js.org/#templates)
2. Choose a template to create your Next.js app (such as default)
3. And then run `create-next-app my-app --template default`
4. Well done!

It will create a directory called <i>my-app</i> inside the current folder.
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

No configuration or complicated folder structures, just the files you need to build your app. When the installation is done, you can open your project folder, run this command:

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

## Start Next Examples

There are a bunch of examples in the Next.js repository that you can use to bootstrap your app.

To bootstrap your app with example:

1. Go to [Create Next App examples](https://create-next-app.js.org/#examples)
2. Choose an example to bootstrap your app (such as basic-css)
3. And then run `create-next-app my-app --example basic-css`
4. Well done!

Now you maybe ready to code and deploy your app!

<!-- ## User Guide

You can find detailed instructions on using Next.js and many tips in [its documentation](https://nextjs.org/docs/). -->

## 💖 Wrap Up

If you think any of the `create-next-app-cli` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `create-next-app-cli` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

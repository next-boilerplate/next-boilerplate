# Create Next App CLI

> create-next-app-cli - Command line interface (CLI) for easily creating Next.js app in one command. It come with default, bootstrap and material UI and Next.js examples.

Create Next App CLI with no build configuration.

  - [Creating an App](#creating-an-app) – How to create a new Next.js app.
  - [User Guide](https://nextjs.org/docs/) – How to develop apps bootstrapped with Create Next App.

## Features

  - Templates ( default, bootstrap and material )
  - Next.js examples

## Install

create-next-app-cli is available on npm:

```javascript
npm install --global create-next-app-cli
```

create-next-app-cli is available on yarn as well:

```javascript
yarn add create-next-app-cli
```

You don't need to install or setup Webpack or Babel. They come with Next.js, so you can just start coding after running `create-next-app`.

## Creating an App

Create a new Next.js app with default, bootstrap or material UI:

```javascript
create-next-app my-app [--template bootstrap]
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

There are a bunch of examples in the [Next.js repo](https://github.com/zeit/next.js/tree/canary/examples) (and growing) that you can use to bootstrap your app.

Run command below to use an example:

```javascript
create-next-app example-app-name --example basic-css
```

Next.js examples:

`active-class-name`, `analyze-bundles`, `basic-css`, `basic-export`, `custom-charset`, `custom-server-actionhero`, `custom-server-express`, `custom-server-fastify`, `custom-server-hapi`, `custom-server-koa`, `custom-server-micro`, `custom-server-nodemon`, `custom-server-polka`, `custom-server-typescript`, `custom-server`, `data-fetch`, `form-handler`, `gh-pages`, `head-elements`, `hello-world`, `layout-component`, `nested-components`, `only-client-render-external-dependencies`, `page-transitions`, `parameterized-routing`, `pass-server-data`, `progressive-render`, `root-static-files`, `shared-modules`, `ssr-caching`, `svg-components`, `using-inferno`, `using-nerv`, `using-preact`, `using-router`, `using-with-router`, `with-absolute-imports`, `with-algolia-react-instantsearch`, `with-amp`, `with-ant-design-less`, `with-ant-design`, `with-antd-mobile`, `with-aphrodite`, `with-apollo-and-redux-saga`, `with-apollo-and-redux`, `with-apollo-auth`, `with-apollo`, `with-app-layout`, `with-asset-imports`, `with-babel-macros`, `with-carbon-components`

## User Guide

You can find detailed instructions on using Next.js and many tips in [its documentation](https://nextjs.org/docs/).

## License

Create Next App CLI is open source software licensed as MIT.

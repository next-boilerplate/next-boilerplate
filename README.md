# Create Next App CLI

> create-next-app-cli - Command line interface (CLI) for easily creating Next.js app in one command. It come with default, bootstrap, material UI and Next.js examples.

[![NPM](https://img.shields.io/npm/v/create-next-app-cli.svg)](https://www.npmjs.com/package/create-next-app-cli)

Create Next App CLI with no build configuration.

  - [Creating an App](#creating-an-app) – How to create a new Next.js app.
  - [User Guide](https://nextjs.org/docs/) – How to develop apps bootstrapped with Create Next App.

## Features

  - Templates ( default, bootstrap and material )
  - Next.js examples

## Install

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

Create a new Next.js app with default, bootstrap or material UI:

```
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

There are a bunch of [examples](#next-examples) in the [Next.js repo](https://github.com/zeit/next.js/tree/canary/examples) (and growing) that you can use to bootstrap your app.

Run command below to use an example:

```
create-next-app example-app-name --example basic-css
```
## User Guide

You can find detailed instructions on using Next.js and many tips in [its documentation](https://nextjs.org/docs/).

## License

Create Next App CLI is open source software [licensed as MIT](https://github.com/themodernjavascript/create-next-app-cli/blob/master/LICENSE).

## Next Examples

`active-class-name`, `analyze-bundles`, `basic-css`, `basic-export`, `custom-charset`, `custom-server-actionhero`, `custom-server-express`, `custom-server-fastify`, `custom-server-hapi`, `custom-server-koa`, `custom-server-micro`, `custom-server-nodemon`, `custom-server-polka`, `custom-server-typescript`, `custom-server`, `data-fetch`, `form-handler`, `gh-pages`, `head-elements`, `hello-world`, `layout-component`, `nested-components`, `only-client-render-external-dependencies`, `page-transitions`, `parameterized-routing`, `pass-server-data`, `progressive-render`, `root-static-files`, `shared-modules`, `ssr-caching`, `svg-components`, `using-inferno`, `using-nerv`, `using-preact`, `using-router`, `using-with-router`, `with-absolute-imports`, `with-algolia-react-instantsearch`, `with-amp`, `with-ant-design-less`, `with-ant-design`, `with-antd-mobile`, `with-aphrodite`, `with-apollo-and-redux-saga`, `with-apollo-and-redux`, `with-apollo-auth`, `with-apollo`, `with-app-layout`, `with-asset-imports`, `with-babel-macros`, `with-carbon-components`, `with-carlo`, `with-cerebral`, `with-cloud9`, `with-componentdidcatch`, `with-configured-preset-env`, `with-context-api`, `with-cookie-auth`, `with-custom-babel-config`, `with-custom-reverse-proxy`, `with-cxs`, `with-data-prefetch`, `with-docker`, `with-dotenv`, `with-draft-js`, `with-dynamic-app-layout`, `with-dynamic-import`, `with-electron`, `with-emotion-fiber`, `with-emotion`, `with-external-scoped-css`, `with-external-styled-jsx-sass`, `with-fela`, `with-firebase-authentication`, `with-firebase-cloud-messaging`, `with-firebase-hosting-and-docker`, `with-firebase-hosting-and-typescript`, `with-firebase-hosting`, `with-flow`, `with-freactal`, `with-glamor`, `with-glamorous`, `with-global-stylesheet-simple`, `with-global-stylesheet`, `with-google-analytics`, `with-hashed-statics`, `with-higher-order-component`, `with-immutable-redux-wrapper`, `with-ioc`, `with-jest-react-testing-library`, `with-jest-typescript`, `with-jest`, `with-kea`, `with-loading`, `with-markdown`, `with-material-ui`, `with-mdx`, `with-mobx-state-tree-typescript`, `with-mobx-state-tree`, `with-mobx`, `with-mocha`, `with-next-css`, `with-next-i18next`, `with-next-less`, `with-next-page-transitions`, `with-next-routes`, `with-next-sass`, `with-noscript`, `with-now-env`, `with-pkg`, `with-polyfills`, `with-portals`, `with-prefetching`, `with-pretty-url-routing`, `with-react-ga`, `with-react-helmet`, `with-react-intl`, `with-react-jss`, `with-react-md`, `with-react-native-web`, `with-react-relay-network-modern`, `with-react-toolbox`, `with-react-useragent`, `with-react-uwp`, `with-react-with-styles`, `with-reasonml`, `with-rebass`, `with-recompose`, `with-redux-code-splitting`, `with-redux-observable`, `with-redux-reselect-recompose`, `with-redux-saga`, `with-redux-wrapper`, `with-redux`, `with-reflux`, `with-refnux`, `with-relay-modern-server-express`, `with-relay-modern`, `with-rematch`, `with-scoped-stylesheets-and-postcss`, `with-segment-analytics`, `with-semantic-ui`, `with-sentry`, `with-shallow-routing`, `with-sitemap-and-robots-express-server-typescript`, `with-sitemap-and-robots-express-server`, `with-slate`, `with-socket.io`, `with-static-export`, `with-storybook`, `with-strict-csp-hash`, `with-strict-csp`, `with-style-sheet`, `with-styled-components`, `with-styled-jsx-plugins`, `with-styled-jsx-postcss`, `with-styled-jsx-scss`, `with-styletron`, `with-sw-precache`, `with-tailwindcss`, `with-ts-node`, `with-typescript`, `with-typestyle`, `with-typings-for-css-modules`, `with-universal-configuration-build-time`, `with-universal-configuration-runtime`, `with-unstated`, `with-url-object-routing`, `with-videojs`, `with-webassembly`, `with-webpack-bundle-analyzer`, `with-webpack-bundle-size-analyzer`, `with-yarn-workspaces`, `with-zones`.

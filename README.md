# React + Typescript Quick Start App Template

Jump straight into development with this pre-configured React app template. 
This template removes the hassle of initial setup and configuration, allowing you to focus on bringing your ideas to life from the get-go.

Preconfigured with:
`Reactjs`. Front-end library for building web apps based on components.
`Typescript`. Typed language for Javascript.
`Vite`. The local development server.
`Eslint`. To enforce coding patterns
`Prettier`. For consistent code styling and formatting
`Emotion Style`. You may opt for traditional css or utility classes, but I prefer CSS-in-JS.
`React Router`. Most of the time, your app would need routing.

## Prerequisite

1. Node Package Manager (npm)
1. Node Version Manager (nvm)
1. Pnpm

## Setup

1. Make a copy of the project template (do not git clone)

   ```bash
   npm install -g degit
   degit git@github.com:rayandus/store-locator-demo.git my-app
   ```
   
   > `degit` makes a copy of the repository without the git history.
   >
   > Hence, you need to do a `git init` to initialze the app as a new git project

1. Go to project root directory and install

   ```bash
   cd my-app
   nvm install
   pnpm install
   ```

1. Start the application

   ```bash
   pnpm start
   ```

   > The app will be launched in your default browser as `http://localhost:5173`

   or if you wish to use a different port

   ```bash
   pnpm start -- --port 5173
   ```

   > Just replace `--port 5173` to your choice of port

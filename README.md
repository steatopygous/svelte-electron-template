# Svelte + Electron Template

NOTE: THIS IS A WORK IN PROGRESS AND SHOULD
NOT BE USED UNTIL THIS WARNING HAS BEEN REMOVED ... HOPEFULLY SOMETIME SOON :-)

I've only pushed it back to GitHub so that I can pull it down on my other Mac.

This is a template for creating applications using a combination of [Svelte](https://svelte.dev), [ElectronJS](https://electronjs.com/), and the Node-SASS preprocessor.

It is based on Blade67's [Sveltron](https://github.com/Blade67/Sveltron) boilerplate.

To create a new project :

```bash
npx degit steatopygous/svelte-electron-template your-app-name
```

*Note that you will need to have [NodeJS](https://nodejs.org) installed.*


## Getting started

Install the dependencies...

```bash
cd Sveltron
npm install
```

...then start everything with [Rollup](https://rollupjs.org):

```bash
npm run dev
```

If everything worked correctly, you should see a window
displaying the version numbers of the various components that
are being used to build your app.  

Edit a component file in `src` and your app in the `main.js`, save it, and reload the app (Ctrl/Cmd + R) to see your changes.

## SASS/SCSS
UPDATE THIS

## Compile app

The app is designed for quick prototyping using Svelte, thus building the app is up to you.

## Useful resources

Electron [[X]](https://electronjs.org) <br>
Svelte [[X]](https://svelte.dev) <br>
Node-Sass [[X]](https://www.npmjs.com/package/node-sass) <br>


## Social media

You can interact with Blade67 via these social media...

Twitter [[X]](https://twitter.com/Blade67470) <br>
Reddit [[X]](https://www.reddit.com/user/Blade67470) <br>
Discord `Blade#6667`

## Packaging your app for MacOS

Two scripts are provided:
 
- **scripts/package-mac** packages
your Electron app as a MacOS app in **release-builds**.
- **scripts/sign-mac-app** signs the app, so that it
will run smoothly (MacOS penlises unsigned apps by slowing them down) 

Note that in order to sign your app, you will need to set two environment
variables: **APP_NAME** and **SIGNATURE**.

TODO: Add documentation, or a link to a site, that explains how to get a signature.

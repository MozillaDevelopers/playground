# Old Fashioned
A Next.js starter with scss, autoprefixer, SSR, and static generator

## Installation

Requires [Node](https://nodejs.org/en/)
```
$ npm install
```

## Develop
After running, you can access at localhost:3000
```
$ npm run dev
```

## Build
```
$ npm run build
```

## Deploy to Github Pages
```
$ npm run deploy
```

## Other
if you are publishing to a static site, set your production URL in variables.js


## Issues
A current limitation of next.js static site exporting is that it needs to be in the root directory. This can present an issue when hosting on Github pages without a custom domain. Setting variables.js is a workaround, but it will still throw a console error. If you are using a custom domain or hosting at the root, then you won't have any issues.

## License
Full license [here](LICENSE)

This project is licensed under the terms of the **MIT** license.

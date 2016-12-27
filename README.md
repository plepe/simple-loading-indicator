# simple-loading-indicator
A simple loading indicator for web pages (a bar at the top of the page)

# Usage
## Installation
```sh
npm install --save simple-loading-indicator
browserify -g browserify-css -o other-script.js dist/other-script.js
```

## API, CommonJS
```js
var simpleLoadingIndicator = require('simple-loading-indicator')

simpleLoadingIndicator.setActive()   // show loading indicator
simpleLoadingIndicator.setValue(0.5) // 50% received
simpleLoadingIndicator.setInactive() // hide loading indicator
```

# Development
```sh
git clone https://github.com/plepe/simple-loading-indicator.git
cd simple-loading-indicator
npm run doc # generate API documentation in doc/
```

# domreadify
A [browserify](https://www.npmjs.com/package/browserify) [transform](https://github.com/browserify/module-deps#transforms) to execute the script only on DOM ready.

If you have global dependencies that would be available only after loading the whole page,
the domreadify transform will allow to postpone `export` execution by executing the whole script on DOM ready event.

## Installation

Install with npm:
```cmd
npm install domreadify --save-dev
```

Install with yarn:
```cmd
yarn add domreadify --dev
```

The package has no configurations.

## Usage

Command line argument:
```cmd
browserify src.js -o output.js --transform domreadify
```

or you can add the transform to your `package.json`:
```json
{
  "browserify": {
    "transform": ["domreadify"]
  }
}
```

```cmd
browserify src.js -o output.js
```

## See also

[browserify-global-shim](https://www.npmjs.com/package/browserify-global-shim) -
a browserify transform for replacing modules with global variables.
You probably will want to use `browserify-global-shim` and `domreadify` together:
first replace modules with global variables, then postpone the script execution to DOM ready
(when all global variables are available).

## License

Copyright (c) 2019 Yuri Sitnikov. Licensed under the MIT license.

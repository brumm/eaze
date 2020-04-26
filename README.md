# eaze

Use it to ease values for n steps up to the value you define.
Note that we skip 0.

```js
import eaze, { linear } from 'eaze'

const values = eaze(2, {
  value: 1,
  easing: linear,
})

// => [
//   [0.5],
//   [1]
// ]
```

Or use it to generate fancy, multi-layered box-shadows

```js
const eased = easedValues(
  6,
  {
    // alpha
    value: 0.07,
    easing: [0.1, 0.5, 0.9, 0.5],
  },
  {
    // offset
    value: 100,
    easing: [0.7, 0.1, 0.9, 0.3],
  },
  {
    // blur
    value: 80,
    easing: [0.7, 0.1, 0.9, 0.3],
  }
)

const fixed = (num, precision = 1) =>
  parseFloat(num.toFixed(precision), 10).toString()

const shadow = `
  box-shadow:
    ${eased
      .map(values => values.map(num => fixed(num)))
      .map(
        ([alpha, offset, blur]) =>
          `0px ${offset}px ${blur}px rgba(0, 0, 0, ${alpha})`
      )
      .join(',\n')};
`
```

<details>
 <summary>For convenience, we also export a bunch of easing values:</summary>

- linear
- ease
- easeIn
- easeOut
- easeInOut
- easeInSine
- easeOutSine
- easeInOutSine
- easeInCubic
- easeOutCubic
- easeInOutCubic
- easeInQuint
- easeOutQuint
- easeInOutQuint
- easeInCirc
- easeOutCirc
- easeInOutCirc
- easeInQuad
- easeOutQuad
- easeInOutQuad
- easeInQuart
- easeOutQuart
- easeInOutQuart
- easeInExpo
- easeOutExpo
- easeInOutExpo

</details>

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

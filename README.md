# ✨ Amp WP PostCSS

This project uses a modular and extensible PostCSS setup based on [10up-toolkit](https://www.npmjs.com/package/10up-toolkit), enhanced with custom plugins, mixins, variables, and functions. 🛠️

## 📁 Location

PostCSS config is defined in:

```
/index.js
```

## 🚀 Usage

The exported config is a function that accepts a `props` object. This allows you to override or extend PostCSS behavior dynamically.

### 🧪 Example

```js
const postcssConfig = require('./index');

module.exports = (props) => {
  return postcssConfig({
    customMixins: {
      rounded: {
        borderRadius: '10px',
      },
    },
    customVariables: {
      primaryColor: '#0073aa',
    },
    customFunctions: {
      double: (value) => parseFloat(value) * 2,
    },
    ...props
  });
};
```

## 🧩 Supported Custom Props

| Prop                      | Type     | Description                                                                 |
|---------------------------|----------|-----------------------------------------------------------------------------|
| `customMixins`            | `object` | Merge additional mixins into `postcss-mixins`                              |
| `customVariables`         | `object` | Override or extend `postcss-simple-vars` variables                         |
| `customFunctions`         | `object` | Extend the `postcss-functions` plugin with custom JavaScript functions     |
| `customPreloadPlugins`    | `object` | Inject plugins before the base config plugins                              |
| `customAdditionalPlugins` | `object` | Inject plugins after the base and default plugins                          |

## ⚙️ Base Behavior

- Uses `10up-toolkit/config/postcss.config.js` as the base.
- Enables `postcss-preset-env` with `stage: 0` and `custom-properties: true`.
- Loads default mixins and variables from `/lib/mixins.js` and `/lib/variables.js`.
- Loads default functions from `/lib/functions.js`.
- Additional plugins from `/lib/plugins.js` are merged in.

## 🛠️ Development

To build or watch styles:

```bash
npm run build      # One-time build
npm run watch      # Dev server with HMR
```

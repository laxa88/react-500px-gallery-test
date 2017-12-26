module.exports = {
  "extends": [
    "google",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module", // allows import/export in js files
    "ecmaFeatures": {
      "jsx": true // allows jsx syntax in js files
    }
  },
  "env": {
    "browser": true, // allows browser variables, e.g. "document.xxx"
  }
};
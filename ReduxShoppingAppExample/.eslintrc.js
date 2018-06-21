module.exports = {
  "extends": [ 
    "airbnb-base",
    "plugin:react/recommended" 
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "linebreak-style": ["off"],
    "react/jsx-uses-vars": [2],
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
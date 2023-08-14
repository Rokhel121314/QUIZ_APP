# Creating NEW react native cli Android on windows

## If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues:

1. npm uninstall -g react-native-cli @react-native-community/cli

2. npx react-native@latest init myProjectName or

## If you want to start a new project with a specific React Native version, you can use the --version argument:

3. npx react-native@X.XX.X init AwesomeProject --version X.XX.X

## If anything works run this on terminal on root directory of your project

4. npx react-native run-android

---

# Installing Nativewind/Tailwindcss for React Native

1. npm install nativewind

## Note: install tailwindcss v. 3.2.2 to avoid error on the future, latest version produce error at the moment

2. npm install --dev tailwindcss / npm install --dev tailwindcss@3.3.2

## Setting up tailwindcss

3. Run npx tailwindcss init to create a tailwind.config.js file Add the paths to all of your component files in your tailwind.config.js file.

// tailwind.config.js

module.exports = {

- content: [],

* content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {},
  },
  plugins: [],
  }

4. Modify your babel.config.js

// babel.config.js
module.exports = {
presets: ['module:metro-react-native-babel-preset'],

- plugins: ["nativewind/babel"],
  };

## Configuring Taiwind on Typescript

5. NativeWind extends the React Native types via declaration merging. The simplest method to include the types is to create a new app.d.ts file and add a triple-slash directive referencing the types.

/// <reference types="nativewind/types" />

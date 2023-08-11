### Creating NEW react native cli Android on windows

## If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues:

1. npm uninstall -g react-native-cli @react-native-community/cli

2. npx react-native@latest init myProjectName or

# If you want to start a new project with a specific React Native version, you can use the --version argument:

3. npx react-native@X.XX.X init AwesomeProject --version X.XX.X

# If anything works run this on terminal on root directory of your project

4. npx react-native run-android

### Installing Nativewind/Tailwindcss for React Native

1. npm install add nativewind

# Note: install tailwindcss v. 3.2.2 to avoid error on the future latest version produce error at the moment

2. npm install --dev tailwindcss / npm install --dev tailwindcss@3.3.2

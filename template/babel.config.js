module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@store": "./src/store",
          "@comp": "./src/comp",
          "@util": "./src/util",
          "@native": "./src/native",
          "@src": "./src",
        }
      }
    ],
    'nativewind/babel'
  ]
};

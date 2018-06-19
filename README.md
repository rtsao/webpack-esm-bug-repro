#### Example repo to reproduce https://github.com/webpack/webpack/issues/7562

##### Instructions
1. `yarn install`
2. `yarn build`
3. `yarn run:node-native` (Notice the SyntaxError)
4. `yarn run:node-webpack` (Notice the lack of SyntaxError)

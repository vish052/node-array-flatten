# node-array-flatten

The node-array-flatten method creates a new array with all sub-array elements concatenated into it.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install node-array-flatten.

```bash
npm install node-array-flatten or npm i node-array-flatten
```

## Usage

```javascript
var flatten = require('node-array-flatten');

flatten([1, [2, 3],[4, 5, 6]]) # returns [1,2,3,4,5,6]
flatten([1, [2, 3],'',[4, 5, 6]]) # returns [1,2,3,4,5,6]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://github.com/vish052/node-array-flatten/blob/master/LICENSE)
Installation

In your npm supported project, run:

$ npm install node-array-flatten --save or npm i node-array-flatten

About Package 

A tiny utility to flatten arrays of arrays into a single array of non-arrays.


Basic Usage

Example:

> var flatten = require('node-array-flatten');

> flatten([1, [2, 3], [4, 5, 6], [7, [8, 9]], 10])

Output : [ 1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10 ]

> flatten([1, [2, 3],'', [4, 5, 6], '',[7, [8, 9]], 10])

Output : [ 1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10 ]



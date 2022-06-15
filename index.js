require('./dist/test.js');


"exports":{
  ".": {
    "types": "index.d.ts",
    "node": "./cjs/flow.prod.js",
    "require": "./cjs/flow.prod.js",
    "es2015": "./cjs/flow.prod.js",
    "default":"./cjs/flow.prod.js"
  },
  "./web": {
    "types": "index.d.ts",
    "node": "./cjs/flow.prod.js",
    "require": "./cjs/flow.prod.js",
    "es2015": "./cjs/flow.prod.js",
    "default":"./cjs/flow.prod.js"
  },
  "./node":{
    "types": "index.d.ts",
    "node": "./cjs/flow.node.js",
    "require": "./cjs/flow.node.js",
    "es2015": "./cjs/flow.node.js",
    "default":"./cjs/flow.node.js"
  }
},
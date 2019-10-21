let module1  = require('./1.js');
let common = require('./node_modules/commen');
let module2 = require('./module2');

console.log('this is 2-require.js');

//console.log(module1);

module1.sayA();
console.log(common);
console.log(module2);




















import * as espree from 'espree';
const ast = espree.parse('let foo = "bar"', { ecmaVersion: 6 });
console.log(323);
console.log(ast);

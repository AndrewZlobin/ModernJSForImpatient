// Tests
console.log(0 + NaN, '' + NaN);             // NaN, NaN
console.log(0 + Infinity, '' + Infinity);   // Infinity, Infinity
console.log(0 + false, '' + false);         // 0, false
console.log(0 + true, '' + true);           // 1, true
console.log(0 + null, '' + null);           // 0, null
console.log(0 + undefined, '' + undefined); // NaN, undefined

console.log([] + []);
console.log({} + []);
console.log([] + {});
console.log({} + {});
console.log([] - {});

console.log(10 % 3);
console.log(-10 % 3);
console.log(-10.7 % 3);
console.log(10.7 % 3);

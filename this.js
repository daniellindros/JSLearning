/* 
Trying to understanding 'this'
------------------------------
So the binding of 'this' follows a set of rules, in the following presedence:

1) Function called with 'new' keyword - 'this' will be bound to the newly created object.
2) Hard binding (call, apply) - 'this' will be bound to object passed in the call/apply function call.
3) Implicit binding - 'this' will be bound to whatever object which made the call to the function. 
4) Default binding - 'this' will be bound to global object (undefined in strict mode). Probably not what we want

Below are some test implementations that illustrate the different 'this' bindings.
*/

//
// Using new keyword
//
console.log("-- Using 'new' Keyword");
function fooA() {
  let a = 'incorrect A';
  this.a = 'correct A';
}
let a = 'incorrect A';
let fn = new fooA();
console.log(fn.a);

//
// Using hard binding
//
function fooB() {
  let b = 'incorrect B';
  return this.b;
}
let b = 'incorrect B';
let objB = {
  b: 'correct B'
};
console.log('-- Using Hard Binding');
console.log('Using call(): ' + fooB.call(objB));
console.log('Using apply(): ' + fooB.apply(objB));

//
// Using implicit binding
//
function fooC() {
  let c = 'incorrect C';
  return this.c;
}
let c = 'incorrect C';
let objC = {
  c: 'correct C',
  fooC: fooC
};
console.log('-- Using Implicit Binding');
console.log(objC.fooC());

//
// Using default binding
//
let d = 'correct D';
function fooD() {
  return this.d;
}
console.log('-- Using Default Binding');
console.log(fooD());

//
// Using ES6-style 'fat arrows'
//
let e = 'incorrect E';
let fooE = e => {
  this.e = e;
  return this.e;
};
console.log('-- Using fat arrow function');
console.log(fooE('correct E'));

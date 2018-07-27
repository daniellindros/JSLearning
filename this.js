'use strict';

/* 
Trying to understanding 'this'
------------------------------
So the binding of 'this' follows a set of rules, in the following presedence:

1) Function called with 'new' keyword - 'this' will be bound to the newly created object.
2) Hard binding (call, apply) - 'this' will be bound to object passed in the call/apply function call.
3) Implicit binding - 'this' will be bound to whatever object which made the call to the function. 
4) Default binding - 'this' will be bound to global object (undefined in strict mode). Probably not what we want
*/

//
// Using hard binding
//
function fooB() {
    console.log(this.b);
}
let b = 'incorrect bar'
let objB = {
    b: 'correct bar'
}
console.log('-- Hard Binding');
fooB.call(objB);

//
// Using implicit binding
//
function fooC() {
    console.log(this.c);
}
let c = 'incorrect bar'
function implicitCaller() {
    let c = 'correct bar';
    fooC();
}
console.log('-- Implicit Binding');
implicitCaller()

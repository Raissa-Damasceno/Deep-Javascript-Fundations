// DEEP JAVASCRIPT FUNDATIONS, v3 - FRONTENDMASTERS COURSE 

// Understanding the method PlusPlus (++)
// If you have a string with number the method plusplus is going to convert to Number

const plusPlus = (x) => {
    let orig_x_coerced = Number(x)
    x = orig_x_coerced + 1
    console.log(x) 
}

plusPlus("1.1")

// Primitive Types 

var v;
console.log(typeof v); // undefined
var v = "1";
console.log(typeof v); // String
v = 1;
console.log(typeof v); // Number
v = true;
console.log(typeof v); // Boolean
v = {};
console.log(typeof v); // Object
v = Symbol();  
console.log(typeof v); // Symbol
v = null;
console.log(typeof v); // Object
v = function(){};
console.log(typeof v); // Function
v = [1,2,3];
console.log(typeof v); // Object
v = 42n;    
console.log(typeof v);  // bigint
v = plusPlus("I expect NaN as primitive type");    
console.log(typeof v);  // NaN

// other types 

// undefined: When you declare dthe variable but the is not a value. 
// undeclare: When you never declare this variable.
// uninitialized: When you never initialize this variable (TDZ error)




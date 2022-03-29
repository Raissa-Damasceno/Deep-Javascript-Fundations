// DEEP JAVASCRIPT FUNDATIONS, v3 - FRONTENDMASTERS COURSE 

// Understanding the method PlusPlus (++)
// If you have a string with number the method plusplus is going to convert to Number

const plusPlus = (x) => {
    let orig_x_coerced = Number(x)
    x = orig_x_coerced + 1
    return x
}

plusPlus("1.1")

// Primitive Types 

var v;  // undefined
var v = "1";  // String
v = 1;  // Number
v = true;  // Boolean
v = {};  // Object
v = Symbol();  // Symbol
v = null;  // Object
v = function(){};  // Function
v = [1,2,3];  // Object
v = 42n;  // bigint
v = plusPlus("I expect NaN as primitive type");    // NaN

// other types 

// undefined: When you declare dthe variable but the is not a value. 
// undeclare: When you never declare this variable.
// uninitialized: When you never initialize this variable (TDZ error)

var myAge = Number("0o46"); // 38 
var myNextAge = Number("39");  // 39
var myCatsAge = Number("n/a"); // NaN
myAge - "my son's age"; // NaN

// myCatsAge === myCatsAge; // false 
// in this case NaN === NaN is going to be false, because NaN doesn't have a identity property (they are not equal to itself)

isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true 

Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false   

Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0
Math.sign(0); // 0

// "fix" Math.sign(..)
const sign = (v) => {
    return v != 0 ? Math.sign(v) : " " ? -1 : 1
}

const formatTrend = (trendRate) => {
    let direction = (trendRate < 0 || Object.is(trendRate, -0)) ? "↓" : "↑"
    return v != 0 ? Math.sign(v) : " " ? -1 : 1
}

formatTrend(-3); // "↓ 3"
formatTrend(3); // "↑ 3"
formatTrend(-0); // "↓ 0"
formatTrend(0); // "↑ 0"


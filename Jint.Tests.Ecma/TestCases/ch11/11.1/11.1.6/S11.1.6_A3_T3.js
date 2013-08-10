// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * "This" operator only evaluates Expression
 *
 * @path ch11/11.1/11.1.6/S11.1.6_A3_T3.js
 * @description Applying grouping operator to String
 */

//Check for String

//CHECK#1
if (("1") !== "1") {
  $ERROR('#1: ("1") === "1". Actual: ' + (("1")));
}

//CHECK#2
if (("x") !== "x") {
  $ERROR('#2: ("x") === "x". Actual: ' + (("x")));
}

//CHECK#3
var x = new Number("1");
if ((x) !== x) {
  $ERROR('#3: var x = new Number("1"); (x) === x. Actual: ' + ((x)));
}

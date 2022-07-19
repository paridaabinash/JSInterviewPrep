/*
_____________________________________JS INTERVIEW PREP DAY-1_________________________________________


Q.1. What is the difference between == && ===?

- Double equals (==) will perform a type conversion when comparing two things.
- Loose equality == compares two values for equality after converting both values to a common type. 
  After conversions (one or both sides may undergo conversions), 
  the final equality comparison is performed exactly as === performs it.
- Loose equality is symmetric: A == B always has identical semantics to B == A 
  for any values of A and B (except for the order of applied conversions).
  undefined and null are loosely equal; that is, undefined == null is true, and null == undefined is true


- Triple equals (===) will do the same comparison as double equals but without type conversion; 
  if the types differ, false is returned.
- Strict equality === compares two values for equality. 
- Neither value is implicitly converted to some other value before being compared. 
  If the values have different types, the values are considered unequal. 
  If the values have the same type, are not numbers, and have the same value, 
  they're considered equal. Finally, if both values are numbers, 
  they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0.


Some of the example which covers the above cases,
0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory


Q.2.What is the spread Operator?

- Spread operator allows iterables( arrays / objects / strings ) to be expanded into
  single elements.
let arr = ['a', 'b', 'c', 'd'];
console.log(...arr);
Output: a b c d;


Q.3.What is the difference between var, let and const?

-In JavaScript, users can declare a variable using 3 keywords that are var, let, and const.
-var keyword is oldest keyword and let and const are introduced in es6.
1.  var declarations are globally scoped/ function scoped because whatever variables declared using var
    it get attached to the window object, thats why we can access it anywhere in the code even inside functions
    while let and const are block scoped.
2.  var variables can be updated and re-declared within its scope; 
    let variables can be updated but not re-declared; 
    const variables can neither be updated nor re-declared.
3.  They all undergo hoisting to the top of their scope, but while var variables are 
    initialized with undefined, let and const variables are not initialized.
4.  While var and let can be declared without being initialized,
    const must be initialized during declaration.


Q.4.What is execution context?

- Whenever the javascript engine gets a script file it creates a special environment to handle the transformation
  and execution of the JavaScript code. This environment is known as the Execution Context.
- The Execution Context contains the code that's currently running,
  and everything that aids in its execution.
- During the Execution Context run-time, the specific code gets parsed by a parser,
  the variables and functions are stored in memory, executable byte-code gets generated,
  and the code gets executed.
- There are two kinds of Execution Context in JavaScript:
            1.Global Execution Context (GEC)
            2.Function Execution Context (FEC)


Q.5.What is meant by first class functions?

- A programming language is said to have First-class functions when functions in that 
  language are treated like any other variable. 
  For example, in such a language, 
  1. a function can be passed as an argument to other functions, 
  2. can be returned by another function and
  3. can be assigned as a value to a variable.
*/

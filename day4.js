/* 

Q. What Exactly Is a Temporal Dead Zone in JavaScript?

    - Temporal dead zone (TDZ) is the area of a block where a variable is inaccessible 
    until the moment the computer completely initializes it with a value.
    - Suppose we attempt to access a variable before its complete initialization. In such a case, JavaScript will throw a ReferenceError.
    - So, to prevent JavaScript from throwing such an error, we have to remember to access your variables from outside the temporal dead zone.
    - A block’s temporal dead zone starts at the beginning of the block’s local scope. 
      It ends when the computer fully initializes your variable with a value.
    ex- 
        {
            // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
            // bestFood’s TDZ continues here
            // bestFood’s TDZ continues here
            // bestFood’s TDZ continues here

            console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
            // bestFood’s TDZ continues here
            // bestFood’s TDZ continues here

            let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
            // bestFood’s TDZ does not exist here
            // bestFood’s TDZ does not exist here
            // bestFood’s TDZ does not exist here
        }


Q. What is the for-in loop in JavaScript? Give its syntax.

    The for-in loop is a special type of a loop that iterates over the properties of an object, 
    or the elements of an array. The generic syntax of the for-in loop is:

    syntax- 
        for(variable in object) {
            // Code to be executed
        }
        ex- 
        // An array with some elements
        var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
        
        // Loop through all the elements in the array 
        for(var i in fruits) {  
            document.write("<p>" + fruits[i] + "</p>"); // Apple Banana Mango Orange Papaya
        }


Q. Explain Local Scope, Block Scope,Functional Scope and Scope Chain in JavaScript ?

    Ans. Block Scope :- variables that is declared inside a specific block & can't be 
    accessed outside of that block.In order to access the variables of that specific block, we need to create objects for it.

        {
            let x = 45;
        }
        console.log(x); // Gives reference error since x cannot be accessed outside of the bloc
        for(let i=0; i<2; i++){ 
            // do something
        }
        console.log(i); // Gives reference error since i cannot be accessed outside of the for

    Functional Scope :- variables that are declared inside a function are called local variables and in the 
    function scope local variables are accessible anywhere inside the function

            function awesomeFunction(){ 
                var a = 2;
                var multiplyBy2 = function(){
                console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are writt
            }}
            console.log(a); // Throws reference error since a is written in local scope and cannot multiplyBy2(); // Throws 
                    reference error since multiplyBy2 is written in local scope

    Local Scope :- variables declared inside a function is inside the local scope. 
    They can only be accessed from within that function, that means they can't be accessed from outside code.

    Scope Chain :- JavaScript engine also uses Scope to find variables. Let’s understand that using an example

                var y = 24;
                function favFunction(){
                    var x = 667;
                    var anotherFavFunction = function(){
                    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable 
                }
                    var yetAnotherFavFunction = function(){
                    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable
                }
                anotherFavFunction();
                yetAnotherFavFunction(); }
                favFunction();

    As you can see in the above code, if javascript engine does not find variable in the local scope,
    it tries to check for the variables in outer scope if the variable does not exist in outer scope, 
    it tries to find variable in global scope if the variable is not found in global scope as well, reference error will be thrown


Q. what is difference between null and undefined and where to use that?

    Ans. In javascript undefined is a type whereas null is an object undefined :-It means a variable declared, 
    but not value has been assigned Null :- wheras Null in javascript is an assignment value. you can assign it to a variable

    eg-- undefined:  var demo;
                    alert(demo);       //shows undefined
                    alert(typeofdemo)  //shows undefined

            Null:    var demo = null;
                    alert(demo);    //shows null
                    alert(typeofdemo) //shows object

Q. What is a Symbol?

    Ans. Symbol is built in object whose constructor returns a symbol also called Symbol value or just symbol 
    that's guaranteed to be unique Symbols are immutable(means once defined cannot be changed) and unique

    const value1 = Symbol("abinash");
    const value2 = Symbol("abinash");
    console.log(value1===value2);     // false, each time it creates unique symbol


Q. Write code to explain map and filter in arrays?

    Ans. When to use map: If we want to perform the same operation/transformation on each element of the 
    array and get back a new array of the same length with the transformed values.

          var numbers= [1,2,3,4,5];
          var doubled  = numbers.map(n => n * 2);
          doubled; // [2,4,6,8,10]

        When to use filter : Every element of the array is passed to the callback function. On each iteration, 
        if the callback returns true, then that element will be added to the new array, otherwise, it is not added to the new array.

          var numbers = [1,2,3,4,5];
          var greaterThan2 = numbers.filter(n => n > 2);
          greaterThan2; // [3,4,5]       


Q. Explain Passed by value and Passed by reference ?

    Ans. In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference. 
    For understanding passed by value and passed by reference, we need to understand what happens when we create a 
    variable and assign a value to it, var x = 2; In the above example, we created a variable x and assigned it a value of “2”. 
    In the background, the “=” (assign operator) allocates some space in the memory, stores the value “2” and returns the 
    location of the allocated memory space. Therefore, the variable x in the above code points to the location of the 
    memory space instead of pointing to the value 2 directly. Assign operator behaves differently when dealing with 
    primitive and non-primitive data types,


Q. Please explain Self Invoking Function and its code ?

    Ans. Without being requested, a self-invoking expression is automatically invoked (initiated). 
    If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself. 
    Normally, we declare a function and call it, however, anonymous functions may be 
    used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions.

        (function(){
            let x = "Hello!!";  // I will invoke myself
        })();    


Q. What is IIFE ?

    Ans. An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined. Syntax of IIFE :

    (function(){
        let x="hello there!";
        console.log(x);
    })();






























*/
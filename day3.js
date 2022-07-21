/*

Q. What are promises and why do we need them?

    -Promises are used to handle asynchronous operations in JavaScript.
    -They are easy to manage when dealing with multiple asynchronous 
    operations where callbacks can create callback hell leading to unmanageable code. 
    -Benefits of Promises: 
        1.Improves Code Readability
        2.Better handling of asynchronous operations
        3.Better flow of control definition in asynchronous logic
        4.Better Error Handling
    -A Promise has four states: 
        1.fulfilled: Action related to the promise succeeded
        2.rejected: Action related to the promise failed
        3.pending: Promise is still pending i.e. not fulfilled or rejected yet
    -A promise can be created using Promise constructor.
    Syntax
        var promise = new Promise(function(resolve, reject){
            //do something
        });
    ex-
        const promise = new Promise(
        (resolve,reject) => {
            setTimeout(() => {
            resolve("Promise!");
            }, 1000);
        });
        promise.then((data) => console.log(data));


Q. What is the purpose of async/await keywords?

    -It simply allows us to write promises based code as if it was synchronous and 
    it checks that we are not breaking the execution thread.
    -It operates asynchronously via the event-loop. Async functions will always return a value.
    eg: 
        const getData = async() => {
            var data = "Hello World";
            return data;
        }
        getData().then(data => console.log(data));//Hello World

    - Await function is used to wait for the promise. It can be used within the async block only.
    - It makes the code wait until the promise returns a result. It only makes the async block wait.
    ex-
        function resolveAfter1Second() {
            console.log("starting fast promise")
            return new Promise(resolve => {
                setTimeout(function() {
                resolve("fast")
                console.log("fast promise is done")
                }, 1000)
            })
        }
        resolveAfter1Second();

        async function sequentialStart() {
        console.log('==SEQUENTIAL START==')             
        const fast = await resolveAfter1Second()        // 1. Execution gets here almost instantly
        console.log(fast)                              
        }

        
Q. What is hosting?


    -hoisting allows us  to use functions and variables before they're declared.
    -Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
    -It allows us to call functions before even writing them in our code. 
    -JavaScript only hoists declarations, not the initializations.
    ex- Variable Hoisting- 

            console.log(num);   // Returns 'undefined' from hoisted var declaration (not 6)
            var num;            // Declaration
            num = 6;            // Initialization
            console.log(num);   // Returns 6 after the line with initialization is executed.

    ex- Function Hoisting-

            catName("Tiger"); // we can call before function declaration and definition because the declaration is hoisted

            function catName(name) {
            console.log("My cat's name is " + name); // The result is: "My cat's name is Tiger"
            }


Q. What is the DOM?

    - The document object represents the whole html document.
    - When html document is loaded in the browser, our browser engine(not Javascript engine) will start parsing the data
     (Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run.)
    - HTML parsing involves two steps: tokenization and tree construction (building something called the DOM Tree (Document Object Model)).
    - The DOM tree describes the content of the HTML document.  
    The <html> element is the first tag and root node of the document tree. 
    The tree reflects the relationships and hierarchies between different tags. 
    By the help of document object, we can add dynamic content to our web page.


Q. Difference between undefined vs not defined vs NaN:

    -The undefined property indicates that the variable has been declared but not been assigned a value. 
    -The NaN property represents a “Not-a-Number” value. The NaN property indicates that a value is not a legitimate number. 
    -not defined: In JavaScript, it is one of the reference errors that JavaScript will throw when someone accesses the 
     variable which is not inside the memory heap.


Q. How many operators do we have in JS ?

    -An operator is used for manipulating a certain value or operand. 
    -Operators are used to perform specific mathematical and logical computations on operands.
        1.Arithmetic Operators
        2.Comparison Operators
        3.Bitwise Operators
        4.Logical Operators
        5.Assignment Operators


Q. What are pure functions?

    -A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
    -It does not depend on any state or data change during a program’s execution.it only depends on its input arguments.
    ex-
        function calculate( sum ) {
            return sum * 5;
        }
            // The above function will always return the same result, if we pass the same 'sum'. 
            // In other words, its output doesn’t get affected by any other values / state changes.
            // So we can call 'calculate' function a Pure Function.


Q. What is callback hell?

    -Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
    -Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the 
     readability and maintainability of the code


Q. What is promise chaining?

    -Promise chaining allows us to control the flow of JavaScript asynchronous operations.
    -By using Promise chaining, we can use the returned value of a Promise as the input to another asynchronous operation.
    ex- 
        let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 100);
        });

        p.then((result) => {
            console.log(result); // 10
            return result * 2;
        }).then((result) => {
            console.log(result); // 20
            return result * 3;
        }).then((result) => {
            console.log(result); // 60
            return result * 4;
        });


Q. What are arrow functions?

    -Arrow functions are anonymous functions (the functions without a name and not bound with an identifier).
    -They don't return any value and can declare without the function keyword. 
    -Arrow functions cannot be used as the constructors. 
    -The context within the arrow functions is lexically or statically defined. They are also called as Lambda Functions
    syntax:
        const functionName = (arg1, arg2, ?..) => {  
            //body of the function  
        } 


Q. Give an example of async/await?

    function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
        setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
        }, 2000)
    })
    }

    function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
        setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
        }, 1000)
    })
    }

    async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
                                                    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow)                               // 2. this runs 2 seconds after 1.

    const fast = await resolveAfter1Second()
    console.log(fast)                               // 3. this runs 3 seconds after 1.
    }
    sequentialStart();
*/
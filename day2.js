/*

_________________________________JS Interview Prep DAY-2_________________________________


1.What are closures?
Ans--
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
    In other words, a closure gives you access to an outer function's scope from an inner function.
    In JavaScript, closures are created every time a function is created, at function creation time.
    ex- 
        function OuterFunction() {
            var outerVariable = 100;
                function InnerFunction() {
                    console.log(outerVariable);
                }
            return InnerFunction;
        }
        var closure = OuterFunction();
        closure();

         In this case, closure is a reference to the instance of the function InnerFunction 
         that is created when OuterFunction is run. The instance of InnerFunction maintains a 
         reference to its lexical environment, within which the variable name exists. 
         For this reason, when closure is invoked, the variable name remains available for use, 
         and 100 is passed to console.log.



2.Explain call(),apply(),and bind() methods ?
Ans--
--> call(): The call() method invokes a function with a given this value and arguments provided individually.
    ex-
            var person1={
                name:"Abinash",
                age:23
            }
            var person2={
              name:"Robert Downey",
              age:57
            }

            function invite(greeting1,greeting2){
              
              console.log(greeting1+" "+this.name+" "+greeting2)
              
            }
            invite.call(person1,"Hi","How are you");
            invite.call(person2,"Hi","How are you");
              
               

--> apply(): Invokes the function with a given this value and allows you to pass in arguments as an array
    ex- 
            invite.apply(person2,["hey dude" ,"congrats on becoming a developer"])
         

--> bind: returns a new function, allowing you to pass any number of arguments
    ex- 
            var invitep1=invite.bind(person1);
            var invitep2=invite.bind(person2);

            invitep1("hi","how are you");
            invitep2("hey","how are you doing?");


    
3.What is creation phase and execution phase ?
    Compiler runs through the entire code for 2 time before actually executing the code,
    1. In the first run, It picks all function declarations and stores them in memory with their reference.
    2. In the second run, It picks all variables and assign undefined to them. 
       In the event of a conflict between variable and function declaration name then that variable is ignored.

    Execution Phase
    1. Variables assigned with values
    2. Functions executed



4.What are function constructors ?
    The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically,
    However, unlike eval, the Function constructor creates functions which execute in the global scope only.
    ex- 
        const sum = new Function('a', 'b', 'return a + b');
        console.log(sum(1, 2));
        // output: 3


         
5.Explain prototypes ?
    Prototypes are the mechanism by which JavaScript objects inherit features from one another.
   

    ex- 
        function Person(name, job, yearOfBirth){   
            this.name= Abinash;
            this.job= FullStack;
            this.yearOfBirth= 28/11/1998;
        }
        // this will show Person's prototype property.
        console.log(Person.prototype);


         
6.What is prototype chain ?

    Every object in JavaScript has a built-in property, which is called its prototype. 
    The prototype is itself an object, so the prototype will have its own prototype, 
    making what's called a prototype chain. The chain ends when we reach a prototype 
    that has null for its own prototype.
    Prototype chaining is used to build new types of objects based on existing ones.
    It is similar to inheritance in a class based language.

    ex-
        function me(name) {
            this.name = 'Abinash';
        }  
        Object.prototype.isPrototypeOf(me.prototype); // Returns true
         


7.Give an example of inheritance using function constructor

        function Employee(name, age, gender, id) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.id = id;
        };
                 
        function Developer(name, age, gender, id, specialization) {
                 
                // Calling Employee constructor function
                Employee.call(this, name, age, gender, id);
                 
                // Adding a new parameter
                this.specialization = specialization;
            }
            console.log(Employee.prototype);
            console.log(Developer.prototype);}
            
               
         
8.What are callbacks?

    A callback function is a function passed into another function as an argument.
    This function is invoked inside the outer function to complete an action.

    ex-
        function callbackFunction(name) {
            console.log('Hello ' + name);
        }
        function outerFunction(callback) {
            let myName = prompt('Please enter your name.');
            callback(myName);
        }             
        outerFunction(callbackFunction);
              
        
9.What is the use of setTimeout?

    The setTimeout() is a method inside the window object, it calls the specified function 
    or evaluates a JavaScript expression provided as a string after a given time period for only once.
    We all have used alarms or reminders several times, this setTimeout() method also 
    has the same purpose in web applications. We use this to delay some kind of executions.

    ex-
        // program to display time every 3 seconds
        function showTime() {

            let dateTime= new Date();                   // return new date and time
            let time = dateTime.toLocaleTimeString();   // returns the current local time
            console.log(time)
            
        }
        setTimeout(showTime, 3000);                     // display the time after 3 seconds
            

10.What is an event loop and call stack?

    Stack: This is where all your javascript code gets pushed and executed one by one 
    as the interpreter reads your program, and gets popped out once the execution is done. 
    If your statement is asynchronous: setTimeout, ajax(), promise, or click event, 
    then that code gets forwarded to Event table, 
    this table is responsible for moving your asynchronous code to callback/event queue after specified time.

    Callback Queue: This is where your asynchronous code gets pushed to, and waits for the execution.

    Event Loop: Then comes the Event Loop, which keeps running continuously and checks the Main stack, 
    if it has any frames to execute, if not then it checks Callback queue, 
    if Callback queue has codes to execute then it pops the message from it to the Main Stack for the execution.

*/
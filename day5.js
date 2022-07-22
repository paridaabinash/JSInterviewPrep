

//Q. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

    let span = document.getElementById('span');

    let btn1 = document.createElement('button');
    btn1.innerText = 'Button 1';
    span.appendChild(btn1);

    btn1.addEventListener('click', function(){
        let h1 = document.createElement('h1');
        h1.id = 'h1id';
        h1.innerText = 'MERN STACK';
        span.appendChild(h1);

        
    })

//Q. Write code to get 1st H1 element from a webpage using DOM

    // let geth1 = document.getElementById('h1id');
    // geth1.style.color = 'red';

//Q. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
    // Fully in Javascript

    function dateFun(){
        var date = new Date();

        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        if(min < 10){
            min= '0' + min;
        }

        if(sec < 10){
            sec= '0' + sec;
        }

        hourDiv.innerText = hour;
        minDiv.innerText = ` : ${min} : `;
        secDiv.innerText = sec;
    }

    setInterval(dateFun, 1000);


    let hourDiv = document.createElement('span');
    hourDiv.innerText = `00`;

    let minDiv = document.createElement('span');
    minDiv.innerText = ` : 00 : `;

    let secDiv = document.createElement('span');
    secDiv.innerText = `00`;

    let timeDiv =  document.createElement('section');
    span.appendChild(timeDiv);

    timeDiv.appendChild(hourDiv);
    timeDiv.appendChild(minDiv);
    timeDiv.appendChild(secDiv);

// Q. Create an HTML page having content as Hello world and a button named Replace Text.
//    When user will click on this button page content should be changed to "Welcome to Elevation academy"

    let helloWorldId = document.getElementById('helloWorldId');
    let btn2 = document.getElementById('replace');

    btn2.addEventListener('click', function(){
        helloWorldId.innerText = 'Welcome to Elevation academy';
    })

// Q. Create an HTML page having content as Hello world and a button named "Hide Text." 
//    When user will click on this button hide the "Hello World" text

    let helloWorldId2 = document.getElementById('helloWorldId2');
    let btn3 = document.getElementById('hide');

    btn3.addEventListener('click', function(){
        helloWorldId2.style.display = 'none';
    })

// Q. Given an array of 0's and 1's find out number of 0's.

    let arr1 = [0,1,0,1,0,1,0,1,0,0,0,1,1,1];
    let count = 0
    for(let i of arr1){
        if(i==0){
            count+=1;
        }
    }
    console.log(count);

// Q. Given an array find out total no. of odd and even nos.

    let arr2 = [1,2,3,4,5,6,7,8,9];
    let evencount= 0;
    let oddcount = 0;
    for(let j of arr2){
        if(j%2 == 0){
            evencount = evencount + 1;
        }
        if(j%2 != 0){
            oddcount = oddcount + 1;
        }
    }
    console.log(`even no. are ${evencount}, odd no. are ${oddcount}`);

// Q. Given a string find out number of vowels.

    let str = 'this is a program to test vowels aeiou';
    let noOfVowels = 0;
    for(let i of str){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            console.log(i);
            noOfVowels = noOfVowels+1;
        }
    }
    console.log(noOfVowels);


// Write a code to create two objects with 2 properties each, 
// one will be string and other will be an array. 
// Create a function to check if all the elements of the arrays in 
// both the objects are same.


    let obj1 = {
        str: '123'
    }

    let obj2 = {
        arr: [1,2,3]
    }

    function check(){
        for(let i of obj1.str){
            for(let j of obj2.arr){
                if(i==j){
                    console.log(i);
                }
            }
        }
    }
    check();
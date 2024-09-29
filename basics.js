//synchronous function:-
//that gets executed line by line
//it won't go to the next line until the return current line completes
//sync
function fun1(){
    for(let i = 0; i < 1000; i++){
        console.log(i);
    }
}

//async
function call(){
    setTimeout(()=>{
        console.log("Hello! Ninja");
    },1000)
};

function call1(){
    setTimeout(()=>{
        console.log("Hello aahinnnnnnn");
    },2000);
};

function call2(){
    setTimeout(()=>{
        console.log("Hello aahinnnnnnn again");
    },0);
};


//synchronous code

//the asynchronous code doesnt blocks the flow of the code.

// it runs/executes if and only if main stack is completed from execution of the function 
//when the sync function/code completed then only the other code runs(asynchronous code).
console.log("Hello");
console.log("Hello");
console.log("Hello");
fun1();//last
call1(); //it takes 2 sec to get executed
call(); //it takes 1 sec to get executed
call2(); //it takes 0 sec to get executed
console.log("Hello");
//it gets execute line by line:
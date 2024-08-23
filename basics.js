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
    setInterval(()=>{
        console.log("Hello! Ninja");
    },100)
};

//syn

//the asynchronous code doesnt blocks the flow of the code
// it runs/executes if and only if main stack is completed from execution of the function 
//when the sync function/code completed then only the other code runs(asynchronous code).
console.log("Hello");
console.log("Hello");
console.log("Hello");
fun1();//last
console.log("Hello");
//it gets execute line by line:
call();
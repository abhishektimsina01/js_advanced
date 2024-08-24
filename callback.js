//callbacks are the function which are passed to another function as an arguement.

//the setTimeout() calls the function mentioned as the arguement in the source code after the delay time mentioned as the arguements too.

//callbacks
//if we call a defined function from the anotherr function after passing then in the form of the arguement is called callback function
//it generally calls the mentioned function(mentioned in the calling part of the function) after the execution f the code is completed.

//the async codes are all send to the side stack not the main stack and the connection between the main stack and the side stack called the event loop frequently checks the side stack to see if any of the async code is ready to be executed or have an answer, and if yes then it drags the code from the side stack to the main stack and then executes them but only after all the synchronous code have been completed executing.

//task 1
function walkdog(callback){
    setTimeout(()=>{
        console.log("you walked the dog");
        callback();
    },4000);
}

//task 2
function feedcat(callback){
    setTimeout(()=>{
        console.log("you fed the cat");
        callback();     

    },3500);
}

//task3
function washdishes(callback){
    setTimeout(()=>{
        console.log("you washed the dishes");
        callback();
    },3000);
}

//task4
function washdishes1(callback){
    setTimeout(()=>{
        console.log("you washed the dishes");
        callback();
    },2500);
}

//task5
function washclothes(callback){
    setTimeout(()=>{
        console.log("you washed the clothes");
        callback();
    },2000);
}

//task6
function cleanthekitchen(callback){
    setTimeout(()=>{
        console.log("you cleaned the kitchen");
        callback();
    },1500);
}
console.log("Last but the first execution");
//they are all the asynchronous function that are being handled in most uncomfortable way.

//WORKING MECHANISM:-
//walkdog() function gets completed then only calls the next async code feedcat() and it gets executed and since he feedcat() also takes the function as arguement(callback), it calls the nexxt funcion after the task is completed. and so on due to which only one code executes at a time.

//if not done then the async code which is ready to give the answer is executed first, which totally kills the flow of the code.

//but using this method drags us in the callback hell as we can se it keeps going down and down unable for us to track the flow of the code.

//now they behave as the synchronous code as they gets executed one after another.
walkdog(()=>{
    feedcat(()=>{
        washdishes(()=>{
            washdishes1(()=>{
                washclothes(()=>{
                    cleanthekitchen(()=>{
                        console.log("all chores completed");
                    });
                })
            });
        });
    });
});
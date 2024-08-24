//callbacks are the function which are passed to another function as an arguement.

//the setTimeout() calls the function mentioned as the arguement in the source code after the delay time mentioned as the arguements too.

//callback 

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
    },3000);
}
//task3
function washdishes(){
    setTimeout(()=>{
        console.log("you washed the dishes");
    },2000);
}

walkdog(()=>{feedcat(()=>{washdishes();});});
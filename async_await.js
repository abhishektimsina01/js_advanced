// async and await = async make a function return a promise
                  // await function makes the async function wait for the promise

//the async/await makes us easier to handle the asynchronois function like the synchronous function.
//it lets us to use the promise more easily, and we dont need the .then() chain and we can check for the error using the try and catch block.....

//task 1
function walkdog(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(true){
                res("you walked your dog");
            }
            else{
                rej("you didnt walk the dog");
            }
        },2500);
    })
}

//task 2
function feedcat(callback){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(true){
                res("you fed the cat");
            }
            else{
                rej("you didnt fed the cat");
            }
        },2000);
    })
}

//task3
function washdishes(callback){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(false){
                res("you washed the dishes");
            }
            else{
                rej("you didnt wash the dishes");
            }
        },1000);
    })
}

//we created a new function for making it the async function that always returns  promise but it doesnt explicitly returns a promise it implicitly returns a promise that is undefined at the end of the execution of all the asynchronous code.

//we generally make the asynch function so that we can stop the execution of the code in sife thst function with the help of the await keyword. 
async function bade(){
    //check for the return of the promise for the resokve
    //runs this program if the asynchronous code returns a success(resolve)
    try{
        //first the try block
        //it promises to return a value may be rej() or res().

        //here if there was no await it would go for further execution without waiting for the calling function but in the case of the await it make the async functin wait until the function(asunchronous function) returns the value either fulfilled(resolve) or decline(reject).
        const walkdogres = await walkdog(); 
        console.log(walkdogres);
        const washdishesres = await washdishes(); 
        console.log(washdishesres);
        const feedcatres = await feedcat(); 
        console.log(feedcatres);
    }
    //runcs the block of the catch block if there is a failure in the return of the value we want
    //if the asynchronous function couldnot complete a promise we run the code in the catch block.
    catch(error){
        console.log(error);
        console.log("how dare your mother fucker.")
    }
}
//when we call the functin we mentined as async it starts to execute the funcion
bade();
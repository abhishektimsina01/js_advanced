//promises is the object which promises us to guve us the result either good or bad result
//good resut means resolve whereas the bad result mean reject
//if resolve then we use .then() and if reject then we use .catch() to see the error or the result(answer)

//syntax : 
//let variable = new Promise((re,rej)=>{asynchronous code});
// variable.then(()=>{resolve code})
//         .catch(()=>{reject code})

//there are 3 states in promise
//They are:
//pending,
//resolve and
//reject

function walkDog(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(true){
                res("you walked the dog");
            }
            else{
                rej("you didnt walked the dog");
            }
        },2000);
    })
}

function washdishes(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                if(true){
                    res("you washed the dishes");
                }
                else{
                    rej("you didnt wash the dishes");
                }
            },2500);
        })
    }

//then chain
walkDog().then(value =>{console.log(value);return washdishes();})
                            .then(value => {console.log(value);})
                            .catch(value=>{console.log(value);})
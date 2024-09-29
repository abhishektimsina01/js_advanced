function walkdog(callback){
    setTimeout(()=>{
        console.log("You walked the dog");
        callback();
    },2000);
}

function feedcat(callback){
    setTimeout(()=>{
        console.log("Fed the cat");
        callback();
    },3000);
}

function washdishes(){
    setTimeout(()=>{
        console.log("Washed the dishes");
    },1000)
}

walkdog(()=>{
    feedcat(()=>{
        washdishes(()=>{
            console.log("all chores completed");
        })
    })
})
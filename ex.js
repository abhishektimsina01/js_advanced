function walkdog(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("You walked the dog");
            res("Completed 1");
        },2000);
    })
}   

function feedcat(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Fed the cat");
            res("Completed 2");
        },3000);
    })
}

function washdishes(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Washed the dishes");
        },1000);
    })
}

// walkdog(()=>{
//     feedcat(()=>{
//         washdishes(()=>{
//             console.log("all chores completed");
//         })
//     })
// })

walkdog()
        .then(value =>{console.log(value); return feedcat()})
        .then(value =>{console.log(value); return washdishes()})
        .catch();
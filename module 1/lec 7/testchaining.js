const fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1.txt");

let thenkapromise1 = f1kapromise.then(function(data){
    console.log(data +"");
    console.log(f1kapromise);
    return 5;
})

let thenkapromise2 = thenkapromise1.then(function(returnedvalueof){
    console.log(returnedvalueof);
    console.log(thenkapromise1);
    console.log("I ran after first scb");

})
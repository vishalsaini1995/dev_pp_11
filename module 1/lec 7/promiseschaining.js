const fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1.txt");

f1kapromise.then(function(data){
    console.log(data +"");
})

let thenkapromise = f1kapromise.then(function(){
    console.log("I  am first scb");
})
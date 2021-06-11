const fs = require("fs");
let pendingpromise = fs.promises.readFile("./f1.txt");
console.log(pendingpromise);

pendingpromise.then(function (data) {
    console.log("Inside Success");
    console.log(data + "");

})

pendingpromise.catch(function (error) {
    console.log("Inside Fail");
    console.log(data + "");

})
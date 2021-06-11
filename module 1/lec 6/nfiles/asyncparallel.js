const fs = require("fs");

let files = ["../f1.txt", "../f2.txt", "../f3.txt"]; //can be n number of files

console.log("Start");

for (let i = 0; i < files.length; i++) {
    fs.readFile(files[i], function (err, data) {
        console.log(data + "");
    })
}
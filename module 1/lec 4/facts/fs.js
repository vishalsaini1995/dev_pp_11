const fs = require("fs");
const cheerio = require("cheerio");
let htmlkadata = fs.readFileSync("./index.html","utf8");

let mydoc = cheerio.load(htmlkadata);

// let secondtag = mydoc("p")[1];
// console.log(mydoc(secondtag).text());


//  console.log(mydoc("ul p").text());


// console.log(mydoc("p").text());

// console.log(mydoc("a").text());


// console.log(mydoc("ul li a").text());


// console.log(mydoc("ul>a").text());



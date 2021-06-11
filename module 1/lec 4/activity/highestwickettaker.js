let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
// request(matchlink,cb);

// function cb(error,response,data) {
//     console.log(data);

// fs.writeFileSync("./match.html",data);

// }

let htmlkadata = fs.readFileSync("./match.html", "utf8");

let mydoc = cheerio.load(htmlkadata);

// let matchinfo = mydoc(".status-text span").text();
// console.log(matchinfo);


let twobowlertable = mydoc(".table.bowler");

// fs.writeFileSync("./twobowlertables.html", twobowlertable+"");
// console.log(twobowlertable);

let highestwickettakername;
let highestwickettaken;
let economy;


for(let i = 0; i<twobowlertable; i++){
    let bowlingtable = mydoc(twobowlertable[i]);

    let alltablerow = bowlingtable.find("tbody tr");

    for(let j=0; j<alltablerow; j++){
        let alltds = mydoc(alltablerow[j]).find("td");

        if(i==0 && j==0){
            highestwickettakername = mydoc(alltds[0]).find("a").text();
            highestwickettaken = mydoc(alltds[4]).text();
            economy = mydoc(alltds[5]).text();
        }
        else{
            let currentwicket =mydoc(alltds[4]).text();
            if(currentwicket>highestwickettaken){
                highestwickettakername = mydoc(alltds[0]).find("a").text();
                highestwickettaken = currentwicket;
                economy = mydoc(alltds[5]).text();
            }

        }
    }

}

console.log("Name of highest wicket taker = " + highestwickettakername);
console.log("Name of highest wicket taken = " + highestwickettaken);
console.log("economy = " + economy);
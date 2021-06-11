const cheerio = require("cheerio");
const request = require("request");

let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(matchlink,function(error,response,data){
    gethighestsixes(data);
})

function gethighestsixes(data){
    
    

    let mydoc = cheerio.load(data);
    let bothbatsmantable = mydoc(".table.batsman");

}
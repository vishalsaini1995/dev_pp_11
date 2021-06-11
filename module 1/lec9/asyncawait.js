
const puppeteer = require("puppeteer");
const id = "infinitegaming2609@gmail.com";
const pw = "VISHALsaini@1";

(async function () {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });

    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]');
    await tab.waitForTimeout(5000); 
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible : true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible : true});
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();
    await tab.waitForSelector('.btn.btn-green.backbone.pull-right' , {visible : true});
    let createChallengeElement = await tab.$('.btn.btn-green.backbone.pull-right');
    let createChallengeLink = await tab.evaluate(function(elem){ return elem.getAttribute("href"); } , createChallengeElement)
    createChallengeLink= "https://www.hackerrank.com" + createChallengeLink;
    // console.log(createChallengeLink); 

    


})();
.then(function () {
    // tab.$() // document.querySelector;
    return tab.$$(".js-track-click.challenge-list-item"); // it will run document.querySelectorAll in the browser and gives you array of all the elements
  })
  .then(function (allQuesArray) {
    // [<a /> , <a /> , <a /> , <a />];
    let allPendingPromises = [];
    for (let i = 0; i < allQuesArray.length; i++) {
      let oneATag = allQuesArray[i];
      let pendingPromise = tab.evaluate(function (element) { return element.getAttribute("href");}  , oneATag);
      allPendingPromises.push(pendingPromise);
    }
    // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    let allPromisesCombined = Promise.all(allPendingPromises);
    // Promise<Pending>
    return allPromisesCombined;
  })
  .then(function(allQuesLinks){
    let oneQuesSolvePromise = solveQuestion(allQuesLinks[0]);
    for(let i=1 ; i<allQuesLinks.length ; i++){
      oneQuesSolvePromise = oneQuesSolvePromise.then(function(){
        let nextQuesSolvePromise = solveQuestion(allQuesLinks[i]);
        return nextQuesSolvePromise;
      })
    }
    return oneQuesSolvePromise;
  })
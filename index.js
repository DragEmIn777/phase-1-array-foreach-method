oppressedWorkers = [
    "Dopey",
    "Sneezy",
    "Happy",
    "Angry",
    "Doc",
    "Lemonjello",
    "Sleepy"
  ];

oppressedWorkers.forEach(oppressedWorker => {
    console.log(`${oppressedWorker} wants to form a union!`)    
});


//forEach immitating .reduce()
function sumArray(numberArray){
    let total = 0;
    numberArray.forEach(i => {
        total = total+ i
    });
    return total;
}

console.log(sumArray([1, 2, 3,]))

//can be used for debugging
empCollection.forEach(e=>{
    console.log("DEBUG: WHAT ARE YOU?!?!?" + e)
})

//another example
function addFullNameToEmployees(empCollection){
    empCollection.forEach(function(e){
      e.fullName = `${e.firstName} ${e.familyName}`
    })
  }
  
  addFullNameToEmployees([
    {firstName: "Byron", familyName: "Karbitii"},
    {firstName: "Luca", familyName: "Tuexedensis"}
  ])
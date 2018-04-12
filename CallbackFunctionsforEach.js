// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, id){
    if (element === "Waldo") {
      found(element, id);   // execute callback
    }
  })
}



function actionWhenFound(foundvalue, index) {
  console.log("Found " + foundvalue + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
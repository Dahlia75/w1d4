function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var id = -1; //this will run once only when we call the makeLoadDie function

  return function() {
    /* your code here */
    if (id >= list.length - 1) {
      id = -1;
    }
    id += 1;
    return list[id];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
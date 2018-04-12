function sortNumerically(Arr){
return Arr.sort(function(a,b){
  return a - b;
})
}
console.log(sortNumerically([5, 2, 1, 10, 9]));
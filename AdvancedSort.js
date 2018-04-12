var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function AdvancedSort(arr){
  return arr.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    else if(a.name > b.name){
      return 1;
    }
    else if(a.age <= b.age){
      return 0;
    }
    else{
      return 1;
    }
  })
}

console.log(AdvancedSort(students));

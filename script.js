/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
arr.map(PrintDeveloperswithMap);
function PrintDeveloperswithMap(arritem) {
  //Write your code here
  if(arritem.profession==="developer"){
    console.log(arritem);
  }
}

function PrintDeveloperbyForEach() {
  //Write your co
}

function addData() {
  //Write your code here
  let newObj ={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  //Write your code here
}

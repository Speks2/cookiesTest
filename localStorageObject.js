let myObj = {

  name: "Alikhan",
  age: 21
};
//STORING OBJECT IN LOCAL STORAGE
let myObj_serialized = JSON.stringify(myObj); //SERIALIZED MEANS CONVERTING IT TO A REREADBLE DATA
//console.log(myObj_serialized);


localStorage.setItem("myObj", myObj_serialized);
//console.log(localStorage);

//JSON.parse will convert the string back to an object
let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

console.Log(myObj_deserialized);

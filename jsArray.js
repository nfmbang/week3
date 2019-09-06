

//Store a reference to the outer this
function Person(name){
  this.name = name;
  var self = this;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+self.name);  
  },2000);
}		//Using the bind(..) function

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ?



function Person(name){
  this.name = name;  
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  
  }.bind(this),2000);
}

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ?


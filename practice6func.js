//genetarator function => Generator function is a special type of function that can be paused and resumed, allowing you to control its execution manually. 

function* generatorFun(i) {
    yield i;
    yield i + 10;
    yield 3;
  }
  
  const gen = generatorFun(10);
  
  console.log(gen.next());
  // Expected output: 10
  
  console.log(gen.next());
  console.log(gen.next().value);
  console.log(gen.next().value);

  // First class function => Functions can be assigned to variables. This allows you to use the variable name as a reference to the function and call it later.

  const greetFun = function() {
    console.log("Welcome to my home");
  };
  
  greetFun(); // Output: "Hello!"
  

  //Arrow function using the oops concept in javascript

  function person(name, Age){
    this.name= name;
    this.Age= Age;

   this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.Age} years old.`); }
        this.greeetFunc1=()=>{
            console.log(`Hello,${this.name} Welcome to my Home `)
        }
  }
  const p1= new person("Aryan",20);
p1.sayHello();
const p2= new person("John");
p2.greeetFunc1();
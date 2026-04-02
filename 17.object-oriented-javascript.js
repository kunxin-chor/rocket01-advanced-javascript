

// an object stores key/value pairs
let person = {
  name:"Mary Sue",
  "date of birth":"22/2/2018",
  salary: 3500,
  permanent: true,
  skills: ["accounting", "MS Office", "HR"],
  address: {
    building:"Blk 731",
    postalCode: "S171121",
    streetName: "Yishun Ring Road",
    unitNumber:"#03-33"
  },
  sayHello: function() {
    console.log("Hi", this.name);
  },
  calculateTakeHomepay:function() {
    return this.salary * 0.8
  }
}
person.sayHello();
console.log(person.address.streetName);
console.log(person.name);
console.log(person["date of birth"]);
person.name = "John Wick";
console.log(person);

// a class is a template to create an object
class Person {
    // a class can have a constructor. it's a special function to create a new object and return it
    constructor(name, dob, email, salary) {
        // the `this` will be referring to the new object that is being created
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.salary = salary;
    }

    calculateTakeHomepay() {
        return this.salary * 0.8;
    }
}

// new Person() => call the constructor function in the Person class and return a new object
let person1 = new Person("Tony Stark", "18/02/1972", "tony@asd.com", 1000000);
console.log(person1);
console.log(person1.email);

let person2 = new Person("Peter Barker", "02/02/1990", "peter@asd.com", 3500);
console.log(person2.salary);

console.log(person1.calculateTakeHomepay());
console.log(person2.calculateTakeHomepay());
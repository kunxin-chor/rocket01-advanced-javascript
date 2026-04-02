class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log("Generic speak");
    }
}

// the keyword extends means "inherits"
// class A extends B
// it means that class A inerits from B
// also means that Mammal is a more specific form of Animal
class Mammal extends Animal {

}

class Dog extends Mammal {
    speak() {
        console.log("woof woof");
    }
}

let animal = new Animal("Fluffy", "dog");
animal.speak();

let mammal = new Mammal("Leo", "lion");
mammal.speak();

let dog = new Dog("Bless Me Boss", "Alaskan Malamute");
dog.speak();

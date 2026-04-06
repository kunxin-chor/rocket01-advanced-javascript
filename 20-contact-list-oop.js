class Contact {
    // the constructor is a special function
    // in the class
    constructor(id, name, email, mobile) {
        // in the constructor, `this` refers to
        // the object going to be created
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobileNumber = mobile;
    }

    // encapsulation: the code  related to the class are in the class and not outside of it
    // if we change mobile to mobileNumber, all we have to do is to change the variable name
    // in the class
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Mobile:", this.mobileNumber)
    }
}

// Class B extends A ==> class B inherits from A
// Class B will have all the methods (functions in a class) and properties (key/value pairs) from A
// Class B is also known as the extended class or the child class
// Class A is also known as the superclass or the parent class
// An extended class can have its own properties and methods
class WorkContact extends Contact {
    // appointment, linkedin, office number, office email
    constructor(id, name, email, mobile, appointment, linkedin, officeNumber, officeEmail) {
        super(id, name, email, mobile);
        this.appointment = appointment;
        this.linkedin = linkedin;
        this.officeNumber = officeNumber;
        this.officeEmail = officeEmail;
    }

    // method overriding: if a function esxists in the parent
    // but the child class has its own version, it will
    // supercede the parent's version (i.e overrides)
    display() {
        super.display();
        console.log("Appointment:", this.appointment);
        console.log("LinkedIn:", this.linkedin);
        console.log("Office Number:", this.officeNumber);
        console.log("Office Email:", this.officeEmail);

    }
}

const person = new Contact(101, "Mary Sue", "mary@asd.com", "9119112");
// console.log(person.name, person.email, person.mobile);
person.display();

const worker = new WorkContact(102, "Tony Stare", "tony@asd.com", "9559552", "CEO", "https://linkedin.com/tony", "1234567", "tony@asd.com" );
worker.display();

// polymorphism: we can add objects of the same parent
// classes together in an array
const contactList = [
    new Contact(102, "John", "john@asd.com", "1121122"),
    new Contact(103, "Lee", "lee@asd.com", "7757555"),
    new WorkContact(105, "Buck Rogers", "buck@asd.com", "11211333", "GM", "https://linkedin/bucks", "12345678", "buck@workasd.com")
];

for (let eachContact of contactList) {
    eachContact.display(); // each element in the contact list will have a display function because
                           // they're either created from the Contact class or the WorkContact class
}
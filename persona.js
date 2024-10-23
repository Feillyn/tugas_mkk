// Membuat Class dengan Constructor Function bernama Person
function Person(firstName, lastName, age) {
    this.firstName = firstName; // properti firstName
    this.lastName = lastName;   // properti lastName
    this.age = age;             // properti age

    // method untuk menampilkan detail
    this.showDetails = function() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}, and my age is ${this.age}`);
    };
}

// Membuat dua instance dari class Person dan menampilkan detailnya
const person1 = new Person("Siti", "Widiastuti", 16);
person1.showDetails();  
const person2 = new Person("Su", "Wendo", 17);
person2.showDetails(); 

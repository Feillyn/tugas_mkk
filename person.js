// Membuat Class dengan Constructor Function bernama Person
class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName; // properti firstName
    this.lastName = lastName;   // properti lastName
}
    // method untuk menampilkan detail
    showdetail(name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

// Membuat dua instance dari class Person dan menampilkan detailnya
const Siti = new Person("Siti", "Widiastuti");
Siti.showdetail(`Budi`);
console.info(Siti);
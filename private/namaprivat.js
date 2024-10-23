class Person {
    #firstName;  // Properti private
    #lastName;   // Properti private
    #age;        // Properti private
  
    constructor(firstName, lastName, age) {
      // Validasi firstName dan lastName tidak boleh kosong
      if (firstName.length === 0 || lastName.length === 0) {
        throw new Error("First name dan last name tidak boleh kosong");
      }
  
      // Validasi age harus lebih dari nol
      if (age <= 0) {
        throw new Error("Age harus lebih dari nol");
      }
  
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#age = age;
    }
  
    // Getter untuk firstName
    get firstName() {
      return this.#firstName;
    }
  
    // Getter untuk lastName
    get lastName() {
      return this.#lastName;
    }
  
    // Getter untuk age
    get age() {
      return this.#age;
    }
  
    // Method untuk menampilkan informasi person
    getInfoPerson() {
      return `Nama: ${this.#firstName} ${this.#lastName}, Umur: ${this.#age}`;
    }
  }
  
  // Contoh penggunaan
  try {
    const person1 = new Person("Nabilah", "Keisha", 16);
    console.log(person1.getInfoPerson());  // Output: Nama: Nabilah Keisha, Umur: 16
  } catch (error) {
    console.log(error.message);
  }
  
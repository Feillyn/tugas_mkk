class Person {
    constructor(firstName, lastName, age) {
      if (!firstName || !lastName) {
        throw new Error("Nama depan tidak boleh kosong");
      }
      if (age <= 0) {
        throw new Error("Umur harus lebih dari nol");
      }
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    // Method untuk menampilkan informasi lengkap
    getInfo() {
      return `Nama: ${this.firstName} ${this.lastName}, Umur: ${this.age}`;
    }
  }
  
  // Contoh penggunaan dengan nama "Nabilah Keisha" dan umur 16
  try {
    const orang = new Person("Seyna", "Feillyn", 16);
    console.log(orang.getInfo());
    console.info(orang); 
  } catch (error) {
    console.log(error.message);
    
  }
  
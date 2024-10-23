class Person {
    constructor(firstName, age = 0) {
      this.firstName = firstName;
      this.age = age;
    }
  
    // Getter untuk nama
    get name() {
      return this.firstName;
    }
  
    // Setter untuk nama dengan validasi
    set name(value) {
      if (value.length === 0) {
        console.log('Nama tidak boleh kosong');
      } else {
        this.firstName = value;
      }
    }
  
    // Setter untuk umur dengan validasi
    set setAge(value) {
      if (value < 0) {
        console.log('Umur tidak boleh kurang dari nol');
      } else {
        this.age = value;
      }
    }
  
    // Getter untuk umur
    get getAge() {
      return this.age;
    }
  }
  
  // Membuat objek baru
  const objek1 = new Person("Lamira", 25); // contoh umur default
  
  // Mengakses properti langsung
  console.log(objek1.firstName); // Lamira
  
  // Mengakses properti menggunakan getter
  console.log(objek1.name); // Lamira
  
  // Menulis nilai ke properti menggunakan method set
  objek1.name = ''; // Akan memicu validasi "Nama tidak boleh kosong"
  console.log(objek1.name); // Masih Lamira karena nama tidak diubah
  
  // Ubah nama yang valid
  objek1.name = 'Sari';
  console.log(objek1.name); // Sari
  
  // Ubah umur dengan setter
  objek1.setAge = -1; // Akan memicu validasi "Umur tidak boleh kurang dari nol"
  console.log(objek1.getAge); // 25 (tidak berubah)
  
  // Ubah umur ke nilai yang valid
  objek1.setAge = 30;
  console.log(objek1.getAge); // 30
  
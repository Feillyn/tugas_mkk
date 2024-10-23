class Karyawan {
    #nama;  // Properti private
    #gaji;  // Properti private
  
    constructor(nama, gaji) {
      // Validasi nama harus string
      if (typeof nama !== 'string') {
        throw new Error("Nama harus berupa string");
      }
  
      // Validasi gaji harus lebih dari nol
      if (typeof gaji !== 'number' || gaji <= 0) {
        throw new Error("Gaji harus lebih dari nol");
      }
  
      this.#nama = nama;
      this.#gaji = gaji;
    }
  
    // Method untuk menampilkan informasi karyawan
    getInfoKaryawan() {
      return `Nama: ${this.#nama}, Gaji: Rp${this.#gaji}`;
    }
  
    // Getter untuk nama (jika perlu akses)
    get nama() {
      return this.#nama;
    }
  
    // Getter untuk gaji (jika perlu akses)
    get gaji() {
      return this.#gaji;
    }
  }
  
  // Contoh penggunaan
  try {
    const karyawan1 = new Karyawan("Ahmad", 5000000);
    console.log(karyawan1.getInfoKaryawan());  // Output: Nama: Ahmad, Gaji: Rp5000000
  } catch (error) {
    console.log(error.message);
  }
  
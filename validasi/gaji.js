class Karyawan {
    constructor(nama, gaji) {
      // Validasi nama harus string
      if (typeof nama !== 'string') {
        throw new Error("Nama harus berupa string");
      }
  
      // Validasi gaji harus lebih dari nol
      if (typeof gaji !== 'number' || gaji <= 0) {
        throw new Error("Gaji harus lebih dari nol");
      }
  
      this.nama = nama;
      this.gaji = gaji;
    }
  
    // Method untuk menampilkan informasi karyawan
    getInfoKaryawan() {
      return `Nama: ${this.nama}, Gaji: Rp${this.gaji}`;
    }
  }
  
  // Contoh penggunaan
  try {
    // Contoh valid, nama adalah string dan gaji lebih dari nol
    const karyawan1 = new Karyawan("Ahmad", 5000000);
    console.log(karyawan1.getInfoKaryawan());  // Output: Nama: Ahmad, Gaji: Rp5000000
  
    // Contoh tidak valid, nama bukan string
    const karyawan2 = new Karyawan(12345, 3000000);  // Akan memicu error: Nama harus berupa string
  } catch (error) {
    console.log(error.message);
  }
  
  try {
    // Contoh tidak valid, gaji kurang dari atau sama dengan nol
    const karyawan3 = new Karyawan("Budi", -5000);  // Akan memicu error: Gaji harus lebih dari nol
  } catch (error) {
    console.log(error.message);
  }
  
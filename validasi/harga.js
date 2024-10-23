class Produk {
    constructor(nama, harga) {
      // Validasi nama harus string
      if (typeof nama !== 'string') {
        throw new Error("Nama harus berupa string");
      }
  
      // Validasi harga harus berupa number
      if (typeof harga !== 'number') {
        throw new Error("Harga harus berupa angka (number)");
      }
  
      this.nama = nama;
      this.harga = harga;
    }
  
    // Method untuk menampilkan informasi produk
    getInfoProduk() {
      return `Nama: ${this.nama}, Harga: Rp${this.harga}`;
    }
  }
  
  // Contoh penggunaan
  try {
    // Contoh valid, nama adalah string dan harga adalah number
    const produk1 = new Produk("Sepatu", 250000);
    console.log(produk1.getInfoProduk());  // Output: Nama: Sepatu, Harga: Rp250000
  
    // Contoh tidak valid, nama bukan string
    const produk2 = new Produk(123, 300000);  // Akan memicu error: Nama harus berupa string
  } catch (error) {
    console.log(error.message);
  }
  
  try {
    // Contoh tidak valid, harga bukan number
    const produk3 = new Produk("Kaos", "seratus ribu");  // Akan memicu error: Harga harus berupa angka (number)
  } catch (error) {
    console.log(error.message);
  }
  
class Produk {
    #nama;  // Properti private
    #harga;  // Properti private
  
    constructor(nama, harga) {
      // Validasi nama harus string
      if (typeof nama !== 'string') {
        throw new Error("Nama harus berupa string");
      }
  
      // Validasi harga harus berupa number
      if (typeof harga !== 'number') {
        throw new Error("Harga harus berupa angka (number)");
      }
  
      this.#nama = nama;
      this.#harga = harga;
    }
  
    // Method untuk menampilkan informasi produk
    getInfoProduk() {
      return `Nama: ${this.#nama}, Harga: Rp${this.#harga}`;
    }
  
    // Getter untuk nama (jika perlu akses)
    get nama() {
      return this.#nama;
    }
  
    // Getter untuk harga (jika perlu akses)
    get harga() {
      return this.#harga;
    }
  }
  
  // Contoh penggunaan
  try {
    const produk1 = new Produk("Sepatu", 250000);
    console.log(produk1.getInfoProduk());  // Output: Nama: Sepatu, Harga: Rp250000
  } catch (error) {
    console.log(error.message);
  }
  
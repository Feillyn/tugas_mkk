class Produk {
    constructor(title, harga) {
      // Validasi title tidak boleh kosong
      if (!title) {
        throw new Error("Title tidak boleh kosong");
      }
  
      // Validasi harga harus berupa number
      if (typeof harga !== 'number') {
        throw new Error("Harga harus berupa angka (number)");
      }
  
      this.title = title;
      this.harga = harga;
    }
  
    // Method untuk menampilkan informasi produk
    getInfoProduk() {
      return `Produk: ${this.title}, Harga: Rp${this.harga}`;
    }
  }
  
  // Contoh penggunaan
  try {
    // Contoh valid, title diisi dan harga berupa angka
    const produk1 = new Produk("Laptop Gaming", 15000000);
    console.log(produk1.getInfoProduk());  // Output: Produk: Laptop Gaming, Harga: Rp15000000
  
    // Contoh tidak valid, title kosong
    const produk2 = new Produk("", 2000000);  // Akan memicu error: Title tidak boleh kosong
  } catch (error) {
    console.log(error.message);
  }
  
  try {
    // Contoh tidak valid, harga bukan angka
    const produk3 = new Produk("Smartphone", "dua juta");  // Akan memicu error: Harga harus berupa angka (number)
  } catch (error) {
    console.log(error.message);
  }
  
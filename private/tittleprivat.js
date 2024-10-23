class Produk {
    #title;  // Properti private
    #harga;  // Properti private
  
    constructor(title, harga) {
      // Validasi title tidak boleh kosong
      if (title.length === 0) {
        throw new Error("Title tidak boleh kosong");
      }
  
      // Validasi harga harus number
      if (typeof harga !== 'number') {
        throw new Error("Harga harus berupa angka (number)");
      }
  
      this.#title = title;
      this.#harga = harga;
    }
  
    // Getter untuk title
    get title() {
      return this.#title;
    }
  
    // Getter untuk harga
    get harga() {
      return this.#harga;
    }
  
    // Method untuk menampilkan informasi produk
    getInfoProduk() {
      return `Produk: ${this.#title}, Harga: Rp${this.#harga}`;
    }
  }
  
  // Contoh penggunaan
  try {
    const produk = new Produk("Laptop", 10000000);
    console.log(produk.getInfoProduk());  // Output: Produk: Laptop, Harga: Rp10000000
  } catch (error) {
    console.log(error.message);
  }
  
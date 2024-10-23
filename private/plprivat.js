class PersegiPanjang {
    #panjang;  // Properti private
    #lebar;    // Properti private
  
    constructor(panjang, lebar) {
      // Validasi panjang dan lebar harus lebih dari nol
      if (panjang <= 0 || lebar <= 0) {
        throw new Error("Panjang dan lebar harus lebih dari nol");
      }
  
      this.#panjang = panjang;
      this.#lebar = lebar;
    }
  
    // Getter untuk panjang
    get panjang() {
      return this.#panjang;
    }
  
    // Getter untuk lebar
    get lebar() {
      return this.#lebar;
    }
  
    // Method untuk menghitung luas persegi panjang
    hitungLuas() {
      return this.#panjang * this.#lebar;
    }
  }
  
  // Contoh penggunaan
  try {
    const persegiPanjang = new PersegiPanjang(12, 10);
    console.log(`Luas: ${persegiPanjang.hitungLuas()}`);  // Output: Luas: 120
  } catch (error) {
    console.log(error.message);
  }
  
class Rectangle {
    constructor(panjang, lebar) {
      if (panjang <= 0 || lebar <= 0) {
        throw new Error("Panjang dan lebar harus lebih dari nol");
      }
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    // Method untuk menghitung luas
    hitungLuas() {
      return this.panjang * this.lebar;
    }
  
    // Method untuk menghitung keliling
    hitungKeliling() {
      return 2 * (this.panjang + this.lebar);
    }
  }
  
  // Contoh penggunaan dengan panjang 12 dan lebar 10
  try {
    const persegiPanjang = new Rectangle(12, 10);
    console.log(`Luas: ${persegiPanjang.hitungLuas()}`);       // Output: Luas: 120
    console.log(`Keliling: ${persegiPanjang.hitungKeliling()}`); // Output: Keliling: 44
  } catch (error) {
    console.log(error.message);
  }
  
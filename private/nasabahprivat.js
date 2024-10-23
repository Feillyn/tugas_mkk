class Bank {
    #nomorRekeningSet;  // Properti private
    #namaNasabahSet;  // Properti private
  
    constructor() {
      this.#nomorRekeningSet = new Set();
      this.#namaNasabahSet = new Set();
    }
  
    // Method untuk menambah nasabah dengan validasi
    tambahNasabah(nomorRekening, namaNasabah) {
      // Validasi nomor rekening tidak boleh sama
      if (this.#nomorRekeningSet.has(nomorRekening)) {
        throw new Error(`Nomor rekening '${nomorRekening}' sudah ada`);
      }
  
      // Validasi nama nasabah tidak boleh sama
      if (this.#namaNasabahSet.has(namaNasabah)) {
        throw new Error(`Nama nasabah '${namaNasabah}' sudah ada`);
      }
  
      this.#nomorRekeningSet.add(nomorRekening);
      this.#namaNasabahSet.add(namaNasabah);
      console.log(`Nasabah dengan nama '${namaNasabah}' dan nomor rekening '${nomorRekening}' berhasil ditambahkan`);
    }
  
    // Method untuk mendapatkan daftar nasabah (untuk keperluan debug)
    getDaftarNasabah() {
      console.log("Daftar Nasabah:");
      this.#namaNasabahSet.forEach((nama) => console.log(nama));
    }
  }
  
  // Contoh penggunaan
  try {
    const bank = new Bank();
    bank.tambahNasabah("1234567890", "Agus");  // Output: Nasabah dengan nama 'Agus' dan nomor rekening '1234567890' berhasil ditambahkan
    bank.tambahNasabah("0987654321", "Budi");  // Output: Nasabah dengan nama 'Budi' dan nomor rekening '0987654321' berhasil ditambahkan
    bank.getDaftarNasabah();  // Output: Daftar Nasabah: Agus, Budi
  } catch (error) {
    console.log(error.message);
  }
  
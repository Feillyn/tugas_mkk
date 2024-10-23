class Bank {
    #nomorRekeningSet;  // Properti private
  
    constructor() {
      this.#nomorRekeningSet = new Set();
    }
  
    // Method untuk menambah rekening
    tambahRekening(nomorRekening) {
      // Validasi nomor rekening tidak boleh sama
      if (this.#nomorRekeningSet.has(nomorRekening)) {
        throw new Error(`Nomor rekening '${nomorRekening}' sudah ada`);
      }
  
      this.#nomorRekeningSet.add(nomorRekening);
      console.log(`Nomor rekening '${nomorRekening}' berhasil ditambahkan`);
    }
  }
  
  // Contoh penggunaan
  try {
    const bank = new Bank();
    bank.tambahRekening("1234567890");  // Output: Nomor rekening '1234567890' berhasil ditambahkan
    bank.tambahRekening("0987654321");  // Output: Nomor rekening '0987654321' berhasil ditambahkan
    bank.tambahRekening("1234567890");  // Akan memicu error: Nomor rekening '1234567890' sudah ada
  } catch (error) {
    console.log(error.message);
  }
  
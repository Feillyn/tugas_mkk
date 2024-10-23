class Bank {
    constructor() {
      this.nomorRekeningSet = new Set();
      this.namaNasabahSet = new Set();
    }
  
    // Method untuk menambah nasabah dengan validasi
    tambahNasabah(nomorRekening, namaNasabah) {
      // Validasi nomor rekening tidak boleh sama
      if (this.nomorRekeningSet.has(nomorRekening)) {
        throw new Error(`Nomor rekening '${nomorRekening}' sudah ada`);
      }
  
      // Validasi nama nasabah tidak boleh sama
      if (this.namaNasabahSet.has(namaNasabah)) {
        throw new Error(`Nama nasabah '${namaNasabah}' sudah ada`);
      }
  
      this.nomorRekeningSet.add(nomorRekening);
      this.namaNasabahSet.add(namaNasabah);
      console.log(`Nasabah dengan nama '${namaNasabah}' dan nomor rekening '${nomorRekening}' berhasil ditambahkan`);
    }
  }
  
  // Contoh penggunaan
  try {
    const bank = new Bank();
  
    // Menambahkan nasabah yang berbeda
    bank.tambahNasabah("1234567890", "Agus");  // Output: Nasabah dengan nama 'Agus' dan nomor rekening '1234567890' berhasil ditambahkan
    bank.tambahNasabah("0987654321", "Budi");  // Output: Nasabah dengan nama 'Budi' dan nomor rekening '0987654321' berhasil ditambahkan
  
    // Mencoba menambahkan nasabah dengan nomor rekening sama
    bank.tambahNasabah("1234567890", "Citra");  // Akan memicu error: Nomor rekening '1234567890' sudah ada
  } catch (error) {
    console.log(error.message);
  }
  
  try {
    const bank = new Bank();
  
    // Menambahkan nasabah yang berbeda
    bank.tambahNasabah("1122334455", "Dewi");  // Output: Nasabah dengan nama 'Dewi' dan nomor rekening '1122334455' berhasil ditambahkan
  
    // Mencoba menambahkan nasabah dengan nama yang sama
    bank.tambahNasabah("2233445566", "Dewi");  // Akan memicu error: Nama nasabah 'Dewi' sudah ada
  } catch (error) {
    console.log(error.message);
  }
  
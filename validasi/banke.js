class Bank {
    constructor() {
      this.nomorRekeningSet = new Set();
    }
  
    // Method untuk validasi dan menambah nomor rekening
    tambahNomorRekening(nomorRekening) {
      // Validasi jumlah digit (harus 10 digit)
      if (!/^\d{10}$/.test(nomorRekening)) {
        throw new Error("Nomor rekening harus terdiri dari 10 digit");
      }
  
      // Validasi nomor rekening tidak boleh sama
      if (this.nomorRekeningSet.has(nomorRekening)) {
        throw new Error("Nomor rekening sudah ada");
      }
  
      this.nomorRekeningSet.add(nomorRekening);
      console.log(`Nomor rekening ${nomorRekening} berhasil ditambahkan`);
    }
  }
  
  // Contoh penggunaan
  try {
    const bank = new Bank();
    bank.tambahNomorRekening("1234567890");  // Output: Nomor rekening 1234567890 berhasil ditambahkan
    bank.tambahNomorRekening("1234567890");  // Akan memicu error: Nomor rekening sudah ada
  } catch (error) {
    console.log(error.message);
  }
  
  try {
    const bank = new Bank();
    bank.tambahNomorRekening("12345");  // Akan memicu error: Nomor rekening harus terdiri dari 10 digit
  } catch (error) {
    console.log(error.message);
  }
  
class Perusahaan {
    #namaKantorCabangSet;  // Properti private
  
    constructor() {
      this.#namaKantorCabangSet = new Set();
    }
  
    // Method untuk menambah kantor cabang
    tambahKantorCabang(namaKantorCabang) {
      // Validasi nama kantor cabang tidak boleh sama
      if (this.#namaKantorCabangSet.has(namaKantorCabang)) {
        throw new Error(`Nama kantor cabang '${namaKantorCabang}' sudah ada`);
      }
  
      this.#namaKantorCabangSet.add(namaKantorCabang);
      console.log(`Kantor cabang '${namaKantorCabang}' berhasil ditambahkan`);
    }
  }
  
  // Contoh penggunaan
  try {
    const perusahaan = new Perusahaan();
    perusahaan.tambahKantorCabang("Jakarta");  // Output: Kantor cabang 'Jakarta' berhasil ditambahkan
    perusahaan.tambahKantorCabang("Bandung");  // Output: Kantor cabang 'Bandung' berhasil ditambahkan
    perusahaan.tambahKantorCabang("Jakarta");  // Akan memicu error: Nama kantor cabang 'Jakarta' sudah ada
  } catch (error) {
    console.log(error.message);
  }
  
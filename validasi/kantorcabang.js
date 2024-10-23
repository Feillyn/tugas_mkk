class Perusahaan {
    constructor() {
      this.namaKantorSet = new Set();
    }
  
    // Method untuk menambah kantor cabang dengan validasi
    tambahKantorCabang(namaKantor) {
      // Validasi jika nama cabang sudah ada di dalam Set
      if (this.namaKantorSet.has(namaKantor)) {
        throw new Error(`Nama kantor cabang '${namaKantor}' sudah ada`);
      }
      this.namaKantorSet.add(namaKantor);
      console.log(`Kantor cabang '${namaKantor}' berhasil ditambahkan`);
    }
  }
  
  // Contoh penggunaan
  try {
    const perusahaan = new Perusahaan();
  
    // Menambahkan kantor cabang yang berbeda
    perusahaan.tambahKantorCabang("Cabang Jakarta");   // Output: Kantor cabang 'Cabang Jakarta' berhasil ditambahkan
    perusahaan.tambahKantorCabang("Cabang Bandung");   // Output: Kantor cabang 'Cabang Bandung' berhasil ditambahkan
  
    // Mencoba menambahkan kantor cabang yang sama
    perusahaan.tambahKantorCabang("Cabang Jakarta");   // Akan memicu error: Nama kantor cabang 'Cabang Jakarta' sudah ada
  } catch (error) {
    console.log(error.message);
  }
  
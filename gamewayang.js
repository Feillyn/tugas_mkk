class Wayang {
    constructor(nama, kekuatan, keahlian) {
      this.nama = nama;
      this.kekuatan = kekuatan;
      this.keahlian = keahlian;
    }
  
    menyerang(lawan) {
      const damage = Math.floor(Math.random() * 21) + 10; // Serangan 10-30 damage
      const message = `${this.nama} menyerang ${lawan.nama} dengan ${this.keahlian} sebesar ${damage} damage.`;
      
      alert(message);  // Tampilkan pesan menggunakan alert
      console.log(message); // Cetak pesan di console
      lawan.kurangiKekuatan(damage);
    }
  
    kurangiKekuatan(damage) {
      this.kekuatan = Math.max(0, this.kekuatan - damage); // Kekuatan tidak boleh kurang dari 0
      const message = `${this.nama} sekarang memiliki kekuatan ${this.kekuatan}.`;
      
      alert(message);  // Tampilkan kekuatan tersisa dengan alert
      console.log(message); // Cetak juga ke console
    }
  
    masihHidup() {
      return this.kekuatan > 0;
    }
  }
  
  // Daftar karakter Wayang
  const wayangList = [
    new Wayang('Yudistira', 100, 'tendangan suci'),
    new Wayang('Bima', 100, 'tinju maut'),
    new Wayang('Arjuna', 100, 'panah sakti'),
    new Wayang('Duryodana', 100, 'serangan gada'),
    new Wayang('Dursasana', 100, 'pukulan kotor')
  ];
  
  // Fungsi untuk memilih karakter
  const pilihKarakter = (player) => {
    let pilihan;
    do {
      let daftarKarakter = `Player ${player}, pilih karakter Anda:\n`;
      wayangList.forEach((wayang, i) => {
        daftarKarakter += `${i + 1}. ${wayang.nama} (Kekuatan: ${wayang.kekuatan})\n`;
      });
      
      pilihan = prompt(daftarKarakter);
    } while (!pilihan || isNaN(pilihan) || pilihan < 1 || pilihan > wayangList.length);
  
    return wayangList[parseInt(pilihan) - 1];
  };
  
  // Fungsi permainan utama
  const mainkanGame = () => {
    alert("Selamat datang di Game Wayang!");
  
    const player1 = pilihKarakter(1);
    const player2 = pilihKarakter(2);
  
    alert(`Player 1 memilih ${player1.nama}`);
    console.log(`Player 1 memilih ${player1.nama}`);
    
    alert(`Player 2 memilih ${player2.nama}`);
    console.log(`Player 2 memilih ${player2.nama}`);
  
    let ronde = 1;
  
    while (player1.masihHidup() && player2.masihHidup()) {
      const rondeMessage = `=== Ronde ${ronde++} ===`;
      
      alert(rondeMessage);
      console.log(rondeMessage);
  
      // Player 1 menyerang
      player1.menyerang(player2);
      if (!player2.masihHidup()) break;
  
      // Player 2 menyerang
      player2.menyerang(player1);
    }
  
    const pemenang = player1.masihHidup() ? player1.nama : player2.nama;
    
    const messageAkhir = `${pemenang} menang! Permainan selesai.`;
    alert(messageAkhir);
    console.log(messageAkhir);
  };
  
  // Jalankan game setelah konfirmasi
  if (confirm("Apakah Anda siap untuk bermain Game Wayang?")) {
    mainkanGame();
  }
  
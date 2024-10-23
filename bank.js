class rekeningBank {
    constructor(nomorRekening, saldo) {
      this.nomorRekening = nomorRekening;
      this.saldo = saldo;
    }
  
    setorUang(jumlah) {
      this.saldo += jumlah;
      console.log(`Setoran sebesar ${jumlah} berhasil.`);
      console.log(`Saldo saat ini: ${this.saldo}`);
    }
  
    tarikUang(jumlah) {
      if (jumlah > this.saldo) {
        console.log("Saldo tidak mencukupi!");
      } else {
        this.saldo -= jumlah;
        console.log(`Penarikan sebesar ${jumlah} berhasil.`);
        console.log(`Saldo saat ini: ${this.saldo}`);
      }
    }
  
    tampilkanSaldo() {
      console.log("Menampilkan saldo...");
      console.log(`Saldo saat ini: ${this.saldo}`);
    }
  }
  
  // Membuat 3 instance 
  const  rekening1 = new rekeningBank("123456", 500000);
  const  rekening2 = new rekeningBank("789101", 1000000);
  const  rekening3 = new rekeningBank("112131", 750000);
  
  // Setor dan tarik uang dari rekening1
  rekening1.setorUang(250000); 
  rekening1.tarikUang(100000);
  
  rekening2.setorUang(300000); 
  rekening2.tarikUang(400000);

  rekening3.setorUang(150000); 
  rekening3.tarikUang(200000);

  console.info("rekening1, rekening2, rekening3");
  rekening1.tampilkanSaldo();
  rekening2.tampilkanSaldo();
  rekening3.tampilkanSaldo();
  console.info(rekening1, rekening2, rekening3);
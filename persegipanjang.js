// Membuat Class dengan Constructor Function bernama PersegiPanjang
function PersegiPanjang(panjang, lebar) {
    this.panjang = panjang; // properti panjang
    this.lebar = lebar;     // properti lebar

    // method untuk menghitung luas
    this.hitungLuas = function() {
        return this.panjang * this.lebar;
    };

    // method untuk menghitung keliling
    this.hitungKeliling = function() {
        return 2 * (this.panjang + this.lebar);
    };
}

// Membuat instance dari class PersegiPanjang dan menghitung luas dan kelilingnya
const persegiPanjang1 = new PersegiPanjang(10, 5);

console.log(`Luas: ${persegiPanjang1.hitungLuas()}`);       // Output: Luas: 50
console.log(`Keliling: ${persegiPanjang1.hitungKeliling()}`); // Output: Keliling: 30

// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

// Contoh penggunaan fungsi dengan nilai alas dan tinggi tertentu
var alasSegitiga = 10;
var tinggiSegitiga = 5;

var luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);

// Menampilkan hasil perhitungan
console.log("Luas segitiga dengan alas " + alasSegitiga + " dan tinggi " + tinggiSegitiga + " adalah: " + luasSegitiga);

      function hitungLuas() {
          // Ambil nilai tinggi dan alas dari input
          var tinggi = document.getElementById('input-tinggi').value;
          var alas = document.getElementById('input-alas').value;
  
          // Validasi input (pastikan keduanya diisi)
          if (tinggi === "" || alas === "") {
              alert("Silakan masukkan nilai tinggi dan alas.");
              return;
          }
  
          // Hitung luas segitiga
          var luas = 0.5 * tinggi * alas;
  
          // Tampilkan hasil
          document.getElementById('hasilluas').textContent = luas;
      }
  
      function resetFormluas() {
          // Reset nilai input dan hasil
          document.getElementById('input-tinggi').value = "";
          document.getElementById('input-alas').value = "";
          document.getElementById('hasilluas').textContent = "0";
      }

      function hitungKeliling() {
          // Ambil nilai sisi1 + sisi2 +sisi3
          var sisi1 = parseInt(document.getElementById('sisi1').value);
          var sisi2 = parseInt(document.getElementById('sisi2').value);
          var sisi3 = parseInt(document.getElementById('sisi3').value);

          // Validasi input (pastikan diisi)
          if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
               alert("Silakan masukkan nilai sisi 1, sisi 2, dan sisi 3.");
               return;
          }
  
          // Hitung luas segitiga
          var keliling = sisi1 + sisi2 + sisi3;
  
          // Tampilkan hasil
          document.getElementById('hasilkeliling').textContent = keliling;
      }

      function resetFormkeliling() {
          // Reset nilai input dan hasil
          document.getElementById('sisi1').value = "";
          document.getElementById('sisi2').value = "";
          document.getElementById('sisi3').value = "";
          document.getElementById('hasilkeliling').textContent = "0";
      }
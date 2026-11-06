function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63sKaI0s8Ik":
        Script1();
        break;
  }
}

function Script1()
{
  // 1. Ambil nilai dari variabel Storyline (case-sensitive)
var player = GetPlayer();
var namaUser  = player.GetVar("NamaUser");
var kelasUser = player.GetVar("KelasUser");
var skorUser  = player.GetVar("Results.ScorePoints"); // Mengambil nilai total poin (misal: 80)
var benarUser = player.GetVar("SoalBenar");
var salahUser = player.GetVar("SoalSalah");

// 2. Ganti URL di bawah dengan Web App URL dari Google Apps Script milik Anda
var scriptURL = "https://script.google.com/macros/s/AKfycbzzZ0W6jesPl4Ylxh9rQJttiF-lgUZe5I9yv2Y7mmLrBySWKZLHixcYahBHk5_mQuHrPQ/exec";

// 3. Susun data yang akan dikirim ke Google Sheets
var formData = new FormData();
formData.append("nama", namaUser);
formData.append("kelas", kelasUser);
formData.append("skor", skorUser);
formData.append("benar", benarUser);
formData.append("salah", salahUser);

// 4. Kirim data menggunakan Fetch API
fetch(scriptURL, {
  method: "POST",
  body: formData
})
.then(function(response) {
  console.log("Data skor kuis berhasil dikirim ke Google Sheets!");
})
.catch(function(error) {
  console.error("Gagal mengirim data skor:", error);
});
}


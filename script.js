function tampilkanGombalan() {
    const gombalan = [
        "Kamu itu seperti garam di lautan, tak terlihat tapi akan selalu ada untuk selamanya.",
        "Sejak kenal kamu, bawaannya pengen belajar terus. Belajar menjadi yang terbaik buat kamu.",
        "Kamu tahu nggak kenapa malam ini nggak ada bintang? Soalnya bintangnya pindah semua ke matamu.",
        "Aku tuh kalau malam selalu mikirin kamu. Pantesan nggak bisa tidur nyenyak.",
        "Bukan Ujian Nasional, tapi kamu adalah ujian terberat dalam hidupku yang selalu ingin aku lewati.",
        "Aku punya banyak rencana untuk masa depan, tapi yang paling penting adalah merencanakan hidupku denganmu.",
        "Kamu itu seperti kopi, membuatku candu dan selalu ingin bertemu.",
        "Kalau disuruh milih antara hidup kaya atau hidup sama kamu, aku akan pilih hidup sama kamu, karena kamu adalah kekayaan terbesarku.",
        "Aku harap aku bisa jadi kaca. Supaya setiap hari bisa lihat wajah cantikmu.",
        "Setiap kali aku melihatmu, aku merasa seperti pulang ke rumah."
    ];

    const gombalanAcak = gombalan[Math.floor(Math.random() * gombalan.length)];
    document.getElementById("gombalan").innerText = gombalanAcak;
}

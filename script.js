const SHEET_URL = "https://script.google.com/macros/s/AKfycbwPNW18aNukSJCjM2ICwkxv6HhovH-RQFP4oxwQ-3I97o23Y3eRHVP3xZ0sfjnbGR_I/exec";

// =====================================================================
// KANDIDAT FINAL (VISI MISI PANJANG)
// =====================================================================
const candidates = [
    // Data Kandidat 01
    {
        id: 1,
        name: "Sabrina Nathasya Ruswandi",
        number: 1,
        image: "assets/images/karina.jpg",
        visi: `
Mewujudkan MPK SMK Negeri 1 Cianjur sebagai organisasi yang berintegritas, profesional, dan berorientasi pada penerapan AD/ART, serta menjalankan fungsi pengawasan OSIS secara objektif, terukur, dan berkelanjutan.
Juga menjadikan MPK sebagai wadah aspirasi seluruh warga sekolah dalam perencanaan dan peng evaluasian program kerja.
        `,
        misi: `
1. Mengoptimalkan penerapan AD/ART dalam setiap kegiatan, keputusan, dan tata kelola MPK maupun OSIS untuk menciptakan organisasi yang disiplin, transparan, dan bertanggung jawab.
2. Menyediakan ruang aspirasi yang terbuka dan inklusif bagi seluruh warga sekolah serta mengolahnya sebagai dasar perencanaan, pelaksanaan, dan evaluasi program kerja.
3. Melaksanakan pengawasan dan evaluasi kinerja OSIS secara berkala, efisien, dan objektif.

PROGRAM UNGGULAN:
1. Ziebazoka Hermione Line:
   Program komunikasi internal MPK melalui ruang aspirasi internal untuk membahas ide, kritik, serta perencanaan program kerja.
2. Zie One Connect:
   Pengadaan kotak saran untuk menampung aspirasi siswa secara rutin sebagai bahan evaluasi OSIS–MPK.

SLOGAN:
"Bersama 01, melangkah pasti membangun prestasi."
        `
    },

    // Data Kandidat 02
    {
        id: 2,
        name: "Rashqa Andrean Fitrah Sulaeman",
        number: 2,
        image: "assets/images/pjw.jpg",
        visi: `
Mewujudkan MPK SMK Negeri 1 Cianjur sebagai organisasi yang profesional, aktif, inovatif, dan peduli,
yang mampu menyalurkan aspirasi, potensi, serta bakat siswa secara cepat dan bertanggung jawab dengan menjunjung sportivitas, kreativitas, integritas, dan nilai-nilai Pancasila.
        `,
        misi: `
1. Membangun akhlak, etika, serta sikap disiplin dan profesional dalam seluruh kegiatan MPK.
2. Menjadikan MPK sebagai jembatan aspirasi siswa yang cepat, tepat, terbuka, dan dapat dipertanggungjawabkan.
3. Meningkatkan solidaritas, kepedulan, dan kerja sama antara MPK, OSIS, guru, dan siswa.
4. Menguatkan peran pengawasan MPK terhadap pelaksanaan kinerja OSIS.
5. Mengajak siswa menjaga kebersihan, budaya membaca, serta sikap jujur dan berintegritas.

PROGRAM UNGGULAN:
1. ZIE UNION:
   Menguatkan hubungan MPK–OSIS–guru melalui rapat rutin, forum aspirasi, dan diskusi terbuka.
2. REMAJA (Refleksi Masa Jabatan):
   Evaluasi setengah periode untuk memperbaiki program dan menguatkan kinerja MPK–OSIS.

SLOGAN:
"Buat hasil yang nyata, bersama Rashqa, dengan nomor 02!"
        `
    },

    // Data Kandidat 03
    {
        id: 3,
        name: "Zenisti Naydelin",
        number: 3,
        image: "assets/images/ningning.jpg",
        visi: `
Mengoptimalkan peran MPK sebagai forum aspirasi yang responsif serta wadah penyampaian saran demi terwujudnya SMK Negeri 1 Cianjur yang maju dan berintegritas.
        `,
        misi: `
• Membangun komunikasi yang harmonis antara peserta didik, OSIS, dan pihak sekolah untuk menciptakan kebijakan yang tepat dan berkeadilan.
• Mewujudkan lingkungan partisipatif di mana siswa memiliki ruang untuk didengar.
• Mendorong lingkungan sekolah yang demokratis dan memberi ruang bagi setiap suara siswa.

PROKER:
1. Expression of the Heart:
   Program penyampaian aspirasi langsung bersama pembina OSKA, OSIS, MPK, perwakilan kelas, dan ekskul.
2. ZIEARSIA:
   G-Form aspirasi untuk kritik dan saran siswa.
3. ZIELASI:
   Evaluasi program untuk meningkatkan kualitas MPK dan menjaga integritas organisasi.

SLOGAN:
"Jalan-jalan ke Paris City, dengan 03 MPK hadir lebih realistis!"
        `
    },

    // Data Kandidat 04
    {
        id: 4,
        name: "Syafira Putri Oksamany",
        number: 4,
        image: "assets/images/winter.jpg",
        visi: `
Mewujudkan MPK yang aktif, komunikatif, dan responsif dalam mengawal kebijakan OSIS serta menjadi mitra kritis yang solutif bagi seluruh warga sekolah.
        `,
        misi: `
1. Menjalankan fungsi pengawasan MPK secara objektif dan tepat sasaran.
2. Menguatkan komunikasi antara MPK, OSIS, dan peserta didik agar tercipta sinergi program yang efektif.
3. Menyediakan ruang diskusi terbuka bagi siswa untuk menyampaikan keluhan dan gagasan.
4. Mengembangkan sistem evaluasi program OSIS–MPK yang lebih terstruktur dan transparan.

PROGRAM UNGGULAN:
1. ZIEWATCH:
   Sistem monitoring dan evaluasi untuk meninjau efektivitas program OSIS.
2. ZIECARE:
   Program pendampingan kelas untuk menampung aspirasi secara rutin.
3. ZIEPART:
   Pelatihan kepemimpinan untuk meningkatkan kemampuan kerja MPK.

SLOGAN:
"Empat melangkah, MPK lebih bekerja."
        `
    },

    // Data Kandidat 05
    {
        id: 5,
        name: "Nurlaila",
        number: 5,
        image: "assets/images/giselle.jpg",
        visi: `
Menjadikan MPK sebagai organisasi yang bertanggung jawab, efektif, efisien, dan mampu menyalurkan
aspirasi, potensi, serta bakat siswa dengan berlandaskan nilai-nilai Pancasila.
        `,
        misi: `
1. Meningkatkan efektivitas dan efisiensi kinerja MPK dalam pengawasan dan evaluasi OSIS.
2. Membangun hubungan harmonis antara OSIS, MPK, dan siswa.
3. Mengembangkan kegiatan yang mempererat kekeluargaan dan meningkatkan partisipasi.
4. Mendorong keterlibatan siswa dalam kegiatan sekolah.
5. Memperkuat komunikasi antara OSIS, MPK, guru, dan warga sekolah.
6. Berkolaborasi dengan ketua ekskul untuk meningkatkan minat bakat dan prestasi siswa.

PROKER UNGGULAN:
1. ZIESUPPORT:
   Meningkatkan kekeluargaan, dukungan, dan solidaritas antar siswa melalui kegiatan supporter.
2. Speak Your Aspiration:
   Program penyampaian aspirasi melalui G-Form atau kotak saran aspirasi.

SLOGAN:
"05! Pilihan pasti, hasil fantasi!"
        `
    }
];


// ===============================================================
// STATE
// ===============================================================
let selectedCandidate = null;

// ===============================================================
// LOAD SUBROLE (DIPERBAIKI: Menambahkan 'value' eksplisit)
// ===============================================================
function loadSubRole() {
    const val = document.getElementById("roleSelect").value;
    const container = document.getElementById("subRoleContainer");
    container.innerHTML = "";

    if (val === "ekskul") {
        container.innerHTML = `
            <label>Pilih Ekstrakurikuler:</label>
            <select id="ekskulSelect">
                <option value="">-- Pilih --</option>
                <option value="Paskibra">Paskibra</option>
                <option value="Pramuka">Pramuka</option>
                <option value="PMR">PMR</option>
                <option value="Kestra">Kestra</option>
                <option value="Cinema">Cinema</option>
                <option value="Karate">Karate</option>
                <option value="Paduan Suara">Paduan Suara</option>
                <option value="English Club">English Club</option>
                <option value="Badminton">Badminton</option>
                <option value="Futsal">Futsal</option>
                <option value="Basket">Basket</option>
                <option value="Voli">Voli</option>
            </select>
        `;
    }

    if (val === "perwakilan_kelas") {
        container.innerHTML = `
            <label>Pilih Kelas:</label>
            <select id="classInput">
                <option value="">-- Pilih Kelas --</option>
                <option value="X PPLG 1">X PPLG 1</option>
                <option value="X PPLG 2">X PPLG 2</option>
                <option value="X PPLG 3">X PPLG 3</option>
                <option value="X AKKUL 1">X AKKUL 1</option>
                <option value="X AKKUL 2">X AKKUL 2</option>
                <option value="X AKKUL 3">X AKKUL 3</option>
                <option value="X AKKUL 4">X AKKUL 4</option>
                <option value="X MPLB 1">X MPLB 1</option>
                <option value="X MPLB 2">X MPLB 2</option>
                <option value="X MPLB 3">X MPLB 3</option>
                <option value="X MPLB 4">X MPLB 4</option>
                <option value="X MPLB 5">X MPLB 5</option>
                <option value="X TJKT 1">X TJKT 1</option>
                <option value="X TJKT 2">X TJKT 2</option>
                <option value="X TJKT 3">X TJKT 3</option>
                <option value="X PS 1">X PS 1</option>
                <option value="X PS 2">X PS 2</option>
                <option value="X PS 3">X PS 3</option>
                <option value="XI MPLB">XI MPLB</option>
                <option value="XI MPLB-MP 1">XI MPLB-MP 1</option>
                <option value="XI MPLB-MP 2">XI MPLB-MP 2</option>
                <option value="XI MPLB-MP 3">XI MPLB-MP 3</option>
                <option value="XI MPLB-ML 1">XI MPLB-ML 1</option>
                <option value="XI MPLB-ML 2">XI MPLB-ML 2</option>
                <option value="XI AKKUL-AK 1">XI AKKUL-AK 1</option>
                <option value="XI AKKUL-AK 2">XI AKKUL-AK 2</option>
                <option value="XI AKKUL-AK 3">XI AKKUL-AK 3</option>
                <option value="XI AKKUL-PB 1">XI AKKUL-PB 1</option>
                <option value="XI TJKT-TR 1">XI TJKT-TR 1</option>
                <option value="XI TJKT-TK 1">XI TJKT-TK 1</option>
                <option value="XI TJKT-TK 2">XI TJKT-TK 2</option>
                <option value="XI PS-BR 1">XI PS-BR 1</option>
                <option value="XI PS-BR 2">XI PS-BR 2</option>
                <option value="XI PS-BD 1">XI PS-BD 1</option>
                <option value="XI PPLG-RPL 1">XI PPLG-RPL 1</option>
                <option value="XI PPLG-RPL 2">XI PPLG-RPL 2</option>
                <option value="XII MPLB-MP 1">XII MPLB-MP 1</option>
                <option value="XII MPLB-MP 2">XII MPLB-MP 2</option>
                <option value="XII MPLB-MP 3">XII MPLB-MP 3</option>
                <option value="XII MPLB-ML 1">XII MPLB-ML 1</option>
                <option value="XII MPLB-ML 2">XII MPLB-ML 2</option>
                <option value="XII AKKUL-AK 1">XII AKKUL-AK 1</option>
                <option value="XII AKKUL-AK 2">XII AKKUL-AK 2</option>
                <option value="XII AKKUL-AK 3">XII AKKUL-AK 3</option>
                <option value="XII AKKUL-PB 1">XII AKKUL-PB 1</option>
                <option value="XII TJKT-TK 1">XII TJKT-TK 1</option>
                <option value="XII TJKT-TK 2">XII TJKT-TK 2</option>
                <option value="XII TJKT-TK 3">XII TJKT-TK 3</option>
                <option value="XII PS-BR 1">XII PS-BR 1</option>
                <option value="XII PS-BR 2">XII PS-BR 2</option>
                <option value="XII PS-BD 1">XII PS-BD 1</option>
                <option value="XII PPLG-RPL 1">XII PPLG-RPL 1</option>
                <option value="XII PPLG-RPL 2">XII PPLG-RPL 2</option>
            </select>

            <label>Jabatan dalam kelas:</label>
            <select id="jabatanSelect">
                <option value="">-- Pilih Jabatan --</option>
                <option value="Ketua Murid">Ketua Murid</option>
                <option value="Wakil KM">Wakil KM</option>
                <option value="Sekretaris">Sekretaris</option>
                <option value="Bendahara">Bendahara</option>
            </select>
        `;
    }
}

// ===============================================================
// MASUK KE HALAMAN VOTING
// ===============================================================
function proceedToVote() {
    const fullname = document.getElementById("fullnameInput").value.trim();
    const role = document.getElementById("roleSelect").value;
    const subRoleContainer = document.getElementById("subRoleContainer");

    if (!fullname || !role) {
        return alert("Nama lengkap dan kategori wajib diisi.");
    }

    // Validasi tambahan untuk Sub-Role (Ekskul dan Kelas/Jabatan)
    if (role === "ekskul" && (!document.getElementById("ekskulSelect") || !document.getElementById("ekskulSelect").value)) {
        return alert("Mohon pilih Ekstrakurikuler Anda.");
    }
    if (role === "perwakilan_kelas") {
        const classVal = document.getElementById("classInput")?.value;
        const jabatanVal = document.getElementById("jabatanSelect")?.value;
        if (!classVal || !jabatanVal) {
            return alert("Mohon pilih Kelas dan Jabatan Kelas Anda.");
        }
    }


    selectedCandidate = null;

    document.getElementById("identityForm").classList.add("hidden");
    document.getElementById("voteSection").classList.remove("hidden");
    document.getElementById("reasonContainer").classList.add("hidden");

    loadCandidates();
}


// ===============================================================
// LOAD KANDIDAT
// ===============================================================
function loadCandidates() {
    const container = document.getElementById("candidateContainer");
    container.innerHTML = "";

    candidates.forEach(c => {
        const card = document.createElement("div");
        card.className = "candidate-card";
        card.onclick = () => selectCard(c.id, card);

        card.innerHTML = `
            <div class="candidate-image-wrapper">
                <img src="${c.image}" alt="Foto Kandidat">
            </div>
            <h3>${c.number}. ${c.name}</h3>

            <button class="btn-visi" onclick="event.stopPropagation(); showVisi(${c.id})">
                Lihat Visi Misi
            </button>
        `;

        container.appendChild(card);
    });
}


// ===============================================================
// PILIH KANDIDAT (Memunculkan form alasan)
// ===============================================================
function selectCard(id, cardElem) {
    document.querySelectorAll(".candidate-card").forEach(c => c.classList.remove("selected"));
    cardElem.classList.add("selected");
    selectedCandidate = id;

    // Tampilkan bagian Alasan dan Tombol Submit
    document.getElementById("reasonContainer").classList.remove("hidden");
    document.getElementById("reasonInput").focus();
}

// ===============================================================
// MODAL VISI MISI
// ===============================================================
function showVisi(id) {
    const c = candidates.find(x => x.id === id);
    if (!c) return;

    document.getElementById("modalName").innerText = c.name;
    document.getElementById("modalVisi").innerText = c.visi.trim();
    document.getElementById("modalMisi").innerText = c.misi.trim();

    document.getElementById("visiModal").classList.remove("hidden");
}

function closeVisi() {
    document.getElementById("visiModal").classList.add("hidden");
}


// ===============================================================
// SUBMIT VOTE (DIPERBAIKI: Sinkron dengan Apps Script dan Spreadsheet)
// ===============================================================
function submitVote() {
    if (!selectedCandidate) return alert("Pilih kandidat dulu.");
    const reason = document.getElementById("reasonInput").value.trim();
    
    // Validasi alasan
    if (!reason)
        return alert("Tulis alasan memilih.");

    // --- PENGAMBILAN DATA KONDISIONAL ---
    let role = document.getElementById("roleSelect").value;
    let ekstrakulerValue = ""; 
    let jabatanKelasValue = ""; 

    if (role === "ekskul") {
        const ekskulSelect = document.getElementById("ekskulSelect");
        if (ekskulSelect) {
            ekstrakulerValue = ekskulSelect.value; 
        }
    }

    if (role === "perwakilan_kelas") {
        const classInput = document.getElementById("classInput");
        const jabatanSelect = document.getElementById("jabatanSelect");
        
        if (classInput && jabatanSelect) {
            let kelas = classInput.value;
            let jabatan = jabatanSelect.value;
            // Gabungkan Kelas dan Jabatan untuk Kolom G/Jabatan Kelas
            jabatanKelasValue = `${kelas} - ${jabatan}`; 
        }
    }
    // --- AKHIR PENGAMBILAN DATA KONDISIONAL ---

    // =========================================================
    // OBJEK DATA FINAL (HARUS SAMA PERSIS DENGAN URUTAN DI APPS SCRIPT)
    // Urutan di Apps Script (diikuti urutan Spreadsheet A-G, tanpa Timestamp):
    // nama, kandidat, role, alasan, ekstrakuler, jabatanKelas
    // =========================================================
    const data = {
        // Timestamp otomatis ditambahkan di Apps Script
        nama: document.getElementById("fullnameInput").value,
        kandidat: selectedCandidate,
        role: role,
        alasan: reason,
        ekstrakuler: ekstrakulerValue || "",   // Kolom F
        jabatanKelas: jabatanKelasValue || "" // Kolom G
    };

    // PENGIRIMAN DATA KE SHEET
    fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => { // Tambahkan .then() dan .catch() untuk feedback yang lebih baik
        alert("Vote berhasil terkirim! Terima kasih atas partisipasi Anda.");
        
        // Reset State
        document.getElementById("voteSection").classList.add("hidden");
        document.getElementById("identityForm").classList.remove("hidden");
        selectedCandidate = null;
        document.getElementById("reasonContainer").classList.add("hidden");
        document.getElementById("fullnameInput").value = "";
        document.getElementById("reasonInput").value = "";
        document.getElementById("roleSelect").value = "";
        document.getElementById("subRoleContainer").innerHTML = "";
    })
    .catch((err) => {
        alert("Gagal mengirim vote atau terjadi masalah koneksi:\n" + err);
    });
}
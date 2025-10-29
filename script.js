/* =================================================================
   TES PEMINATAN DIVISI KEPANITIAAN – VERSI 4 (SISTEM PAKET A/B/C/D/E)
   Arsitektur oleh User, Implementasi oleh Gemini
   DIINTEGRASIKAN DENGAN UI BARU
   ================================================================= */

// ===============================
// PAKET A: TAHAP 1 (UMUM / KLUSTER)
// ===============================
const packetA_Stage1 = [
  {
    text: "Dalam sebuah proyek, Anda paling menikmati bagian...",
    options: [
      { text: "Eksekusi di lapangan dan memastikan semua berjalan teknis.", points: "Operasional" },
      { text: "Merancang ide, konsep, dan alur kreatif.", points: "Konseptual" },
      { text: "Berhubungan dengan orang, promosi, dan membangun relasi.", points: "Komunikatif" },
      { text: "Mengatur data, anggaran, dan arsip agar rapi.", points: "Administratif" },
    ],
  },
  {
    text: "Kekuatan terbesar Anda adalah...",
    options: [
      { text: "Kemampuan beradaptasi dengan situasi di lapangan.", points: "Operasional" },
      { text: "Kreativitas dalam memecahkan masalah.", points: "Konseptual" },
      { text: "Kemampuan meyakinkan dan berkomunikasi dengan orang.", points: "Komunikatif" },
      { text: "Ketelitian dalam mengurus detail dan dokumen.", points: "Administratif" },
    ],
  },
  {
    text: "Saat bekerja kelompok, Anda sering mengambil peran...",
    options: [
      { text: "Sebagai 'otak' yang memberi ide dan konsep.", points: "Konseptual" },
      { text: "Sebagai 'wajah' yang presentasi atau lobi ke pihak luar.", points: "Komunikatif" },
    ],
  },
  {
    text: "Anda lebih suka...",
    options: [
      { text: "Pekerjaan fisik yang banyak bergerak dan butuh stamina.", points: "Operasional" },
      { text: "Pekerjaan yang mengandalkan ketelitian administrasi.", points: "Administratif" },
    ],
  },
  {
    text: "Mana yang lebih penting dalam sebuah acara?",
    options: [
      { text: "Konsep yang unik dan alur yang menarik.", points: "Konseptual" },
      { text: "Publikasi yang masif dan citra yang baik.", points: "Komunikatif" },
    ],
  },
  {
    text: "Jika ada masalah, Anda...",
    options: [
      { text: "Langsung turun tangan mengatasi masalah teknis di lapangan.", points: "Operasional" },
      { text: "Mengecek ulang data, surat, atau arsip yang terkait.", points: "Administratif" },
    ],
  },
  {
    text: "Anda paling bersemangat saat...",
    options: [
      { text: "Menyusun strategi dan ide-ide baru.", points: "Konseptual" },
      { text: "Menjaga semua perlengkapan dan keamanan di lokasi.", points: "Operasional" },
    ],
  },
  {
    text: "Pekerjaan impian Anda adalah...",
    options: [
      { text: "Yang berhubungan dengan angka, arsip, dan keteraturan.", points: "Administratif" },
      { text: "Yang berhubungan dengan branding, media, dan relasi.", points: "Komunikatif" },
    ],
  },
];

// ===============================
// PAKET B: TAHAP 2 (OPERASIONAL)
// Divisi: Pertandingan, Logistik, K3
// ===============================
const packetB_Operasional = [
  // Pertanyaan Pertandingan
  {
    text: "Anda lebih suka mengatur jadwal pertandingan atau menjadi bagian lapangan?",
    options: [
      { text: "Mengatur jadwal", points: ["Pertandingan", "Acara"] },
      { text: "Lapangan", points: ["Pertandingan", "K3"] },
    ],
  },
  {
    text: "Anda nyaman bekerja di bawah tekanan waktu pertandingan?",
    options: [
      { text: "Ya", points: ["Pertandingan", "K3"] },
      { text: "Tidak", points: ["Kesekretariatan", "PDD"] },
    ],
  },
  {
    text: "Lebih suka memimpin tim wasit atau mengatur peserta?",
    options: [
      { text: "Wasit", points: ["Pertandingan", "K3"] },
      { text: "Peserta", points: ["Pertandingan", "Kesekretariatan"] },
    ],
  },
  // Pertanyaan Logistik
  {
    text: "Anda lebih suka memeriksa perlengkapan atau mendistribusikan barang?",
    options: [
      { text: "Memeriksa", points: ["Logistik", "K3"] },
      { text: "Mendistribusikan", points: ["Logistik", "Kesekretariatan"] },
    ],
  },
  {
    text: "Anda teliti dalam menjaga ketersediaan alat?",
    options: [
      { text: "Ya", points: ["Logistik", "K3"] },
      { text: "Tidak", points: ["Kesekretariatan", "PDD"] },
    ],
  },
  // Pertanyaan K3
  {
    text: "Anda sigap menghadapi situasi darurat?",
    options: [
      { text: "Ya", points: ["K3", "Logistik"] },
      { text: "Tidak", points: ["Kesekretariatan", "PDD"] },
    ],
  },
  {
    text: "Anda lebih tertarik pada kesehatan atau keselamatan kerja?",
    options: [
      { text: "Kesehatan", points: ["K3", "Kesekretariatan"] },
      { text: "Keselamatan", points: ["K3", "Logistik"] },
    ],
  },
];

// ===============================
// PAKET C: TAHAP 2 (KONSEPTUAL)
// Divisi: Acara, Perlombaan, PDD
// ===============================
const packetC_Konseptual = [
  // Pertanyaan Acara
  {
    text: "Anda senang membuat rundown kegiatan?",
    options: [
      { text: "Ya", points: ["Acara", "Kesekretariatan"] },
      { text: "Tidak", points: ["PDD", "Humas"] },
    ],
  },
  {
    text: "Anda bisa mengkoordinasi banyak pihak?",
    options: [
      { text: "Ya", points: ["Acara", "Pertandingan"] },
      { text: "Tidak", points: ["Kesekretariatan", "PDD"] },
    ],
  },
  // Pertanyaan Perlombaan
  {
    text: "Anda lebih suka lomba berbasis kreativitas atau akademik?",
    options: [
      { text: "Kreativitas", points: ["Perlombaan", "PDD"] },
      { text: "Akademik", points: ["Perlombaan", "Kesekretariatan"] },
    ],
  },
  {
    text: "Anda suka merancang konsep lomba dan aturannya?",
    options: [
      { text: "Ya", points: ["Perlombaan", "Acara"] },
      { text: "Tidak", points: ["Kesekretariatan", "Humas"] },
    ],
  },
  // Pertanyaan PDD
  {
    text: "Anda lebih suka membuat desain visual atau menulis konten?",
    options: [
      { text: "Desain", points: ["PDD", "Humas"] },
      { text: "Konten", points: ["PDD", "Kesekretariatan"] },
    ],
  },
  {
    text: "Anda suka mencoba gaya visual baru?",
    options: [
      { text: "Ya", points: ["PDD", "Acara"] },
      { text: "Tidak", points: ["Kesekretariatan", "Pendanaan"] },
    ],
  },
];

// ===============================
// PAKET D: TAHAP 2 (KOMUNIKATIF)
// Divisi: Humas, Pendanaan
// ===============================
const packetD_Komunikatif = [
  // Pertanyaan Humas
  {
    text: "Anda nyaman berbicara dengan orang baru?",
    options: [
      { text: "Ya", points: ["Humas", "Acara"] },
      { text: "Tidak", points: ["Kesekretariatan", "PDD"] },
    ],
  },
  {
    text: "Anda senang membuat relasi antar organisasi?",
    options: [
      { text: "Ya", points: ["Humas", "Pendanaan"] },
      { text: "Tidak", points: ["Kesekretariatan", "K3"] },
    ],
  },
  // Pertanyaan Pendanaan
  {
    text: "Anda suka mengelola keuangan?",
    options: [
      { text: "Ya", points: ["Pendanaan", "Kesekretariatan"] },
      { text: "Tidak", points: ["Humas", "PDD"] },
    ],
  },
  {
    text: "Anda berani mencari sponsor ke pihak luar?",
    options: [
      { text: "Ya", points: ["Pendanaan", "Humas"] },
      { text: "Tidak", points: ["Kesekretariatan", "Logistik"] },
    ],
  },
];

// ===============================
// PAKET E: TAHAP 2 (ADMINISTRATIF)
// Divisi: Kesekretariatan
// ===============================
const packetE_Administratif = []; // Kosong, tidak perlu pertanyaan

// ===============================
// VARIABEL UTAMA & LOGIKA APLIKASI
// ===============================
let currentQuestionIndex = 0;
let currentStage = 1;
let activeQuestionPacket = []; // Paket (B/C/D/E) yg aktif di Tahap 2
let activeClusterName = ""; // Untuk ditampilkan di hasil akhir
let totalQuestionsInCurrentStage = 0; // Untuk progress bar

// Skor Tahap 1 (menentukan Kluster)
let clusterScores = {
  Operasional: 0,
  Konseptual: 0,
  Komunikatif: 0,
  Administratif: 0,
};

// Skor Tahap 2 (menentukan Divisi) - Direset ke 0
let divisionScores = {
  Pertandingan: 0,
  Perlombaan: 0,
  K3: 0,
  PDD: 0,
  Kesekretariatan: 0,
  Humas: 0,
  Acara: 0,
  Logistik: 0,
  Pendanaan: 0,
};

// ===============================
// DOM ELEMENTS (Disesuaikan dengan HTML baru)
// ===============================
const startBtn = document.getElementById("start-btn");
const questionSection = document.getElementById("question-section");
const startSection = document.getElementById("start-section");
const resultSection = document.getElementById("result-section");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");
// Elemen UI Baru
const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");


// ===============================
// EVENT LISTENERS
// ===============================
startBtn.addEventListener("click", () => {
  startSection.classList.add("hidden");
  startSection.classList.remove("active"); // Pastikan start section tidak aktif
  questionSection.classList.remove("hidden");
  startQuiz(); // Memulai kuis
});

restartBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  startSection.classList.remove("hidden");
  startSection.classList.add("active"); // Tampilkan kembali start section
});


// ===============================
// FUNGSI UTAMA KUIS
// ===============================

// Memulai dan Me-reset Kuis
function startQuiz() {
  // Reset state
  currentStage = 1;
  currentQuestionIndex = 0;
  activeQuestionPacket = packetA_Stage1;
  totalQuestionsInCurrentStage = packetA_Stage1.length;
  activeClusterName = "";

  // Reset skor Kluster
  for (let cluster in clusterScores) {
    clusterScores[cluster] = 0;
  }
  // Reset skor Divisi
  for (let division in divisionScores) {
    divisionScores[division] = 0;
  }

  loadQuestion(); // Memuat pertanyaan pertama
}

// Memuat Pertanyaan ke UI
function loadQuestion() {
  const qList = activeQuestionPacket;
  const q = qList[currentQuestionIndex];

  questionText.textContent = q.text;
  optionsContainer.innerHTML = ""; // Kosongkan opsi sebelumnya

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.classList.add("option-btn"); // Menggunakan class dari CSS baru
    btn.addEventListener("click", () => handleAnswer(opt.points));
    optionsContainer.appendChild(btn);
  });

  updateUI(); // Panggil fungsi update UI
}

// Meng-update Progress Bar dan Counter
function updateUI() {
  if (totalQuestionsInCurrentStage > 0) {
      questionCounter.textContent = `Pertanyaan ${currentQuestionIndex + 1}/${totalQuestionsInCurrentStage}`;
      const progressPercent = (currentQuestionIndex / totalQuestionsInCurrentStage) * 100;
      progressBar.style.width = `${progressPercent}%`;
  } else {
      // Sembunyikan jika tidak ada pertanyaan (misal, transisi)
      questionCounter.textContent = "";
      progressBar.style.width = "0%";
  }
}

// Menangani Jawaban
function handleAnswer(points) {
  if (currentStage === 1) {
    // TAHAP 1: 'points' adalah NAMA KLUSTER (string)
    clusterScores[points] += 1;
    currentQuestionIndex++;

    if (currentQuestionIndex >= packetA_Stage1.length) {
      progressBar.style.width = "100%"; // Selesaikan progress bar Tahap 1
      startStage2();
    } else {
      loadQuestion();
    }
  } else {
    // TAHAP 2: 'points' adalah DAFTAR DIVISI (array)
    points.forEach((div) => {
      if (divisionScores.hasOwnProperty(div)) {
        divisionScores[div] += 1;
      }
    });
    currentQuestionIndex++;

    if (currentQuestionIndex >= activeQuestionPacket.length) {
      progressBar.style.width = "100%"; // Selesaikan progress bar Tahap 2
      showResult();
    } else {
      loadQuestion();
    }
  }
}

// Memulai Tahap 2
function startStage2() {
  // 1. Tentukan kluster teratas dari Tahap 1
  activeClusterName = Object.keys(clusterScores).reduce((a, b) =>
    clusterScores[a] > clusterScores[b] ? a : b
  );

  // 2. Pilih Paket Pertanyaan Tahap 2 berdasarkan kluster
  switch (activeClusterName) {
    case "Operasional":
      activeQuestionPacket = packetB_Operasional;
      break;
    case "Konseptual":
      activeQuestionPacket = packetC_Konseptual;
      break;
    case "Komunikatif":
      activeQuestionPacket = packetD_Komunikatif;
      break;
    case "Administratif":
      activeQuestionPacket = packetE_Administratif;
      break;
    default:
      activeQuestionPacket = []; // Fallback
  }
  
  // 3. Pindah ke Tahap 2 dan reset counter
  currentStage = 2;
  currentQuestionIndex = 0;
  totalQuestionsInCurrentStage = activeQuestionPacket.length; // Update total pertanyaan

  // 4. (PENTING) Cek jika paketnya kosong (kasus Paket E / Administratif)
  if (activeQuestionPacket.length === 0) {
    if (activeClusterName === "Administratif") {
      divisionScores["Kesekretariatan"] = 1; // Beri 1 poin agar terdeteksi
    }
    showResult(); // Langsung ke hasil
    return; // Hentikan fungsi di sini
  }
  
  // 5. Acak pertanyaan Tahap 2 agar lebih dinamis
  activeQuestionPacket.sort(() => Math.random() - 0.5);

  // 6. Muat pertanyaan pertama Tahap 2
  loadQuestion();
}

// Menampilkan Hasil Akhir
function showResult() {
  questionSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultSection.classList.add("active");

  // Hasil akhir dihitung HANYA dari skor Tahap 2 (divisionScores)
  const topDivision = Object.keys(divisionScores).reduce((a, b) =>
    divisionScores[a] > divisionScores[b] ? a : b
  );

  // Tampilkan hasil di elemen HTML baru
  resultText.innerHTML = `Minat utamamu ada di kluster: <strong>${activeClusterName}</strong>.
    <br><br>
    Kamu paling cocok di divisi <strong>${topDivision}</strong>! 🎉`;
}
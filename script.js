function start() {
  // Sembunyikan tombol mulai dan tampilkan gombalan
  document.querySelector('.start-btn').classList.add('hidden');
  
  setTimeout(() => {
    document.querySelector('#gombalan').classList.remove('hidden');
  }, 1000); // Tampilkan setelah 1 detik

  // Mulai memutar musik
  const music = document.getElementById('background-music');
  music.play();
}

function showQuestion() {
  // Sembunyikan gombalan dan tampilkan pertanyaan
  document.querySelector('#gombalan').classList.add('hidden');
  
  setTimeout(() => {
    document.querySelector('#question').classList.remove('hidden');
  }, 1000); // Tampilkan setelah 1 detik
}

function showResponse(answer) {
  const responseContainer = document.getElementById('response-container');
  const responseText = document.getElementById('response');

  if (answer === 'yes') {
    responseText.textContent = '🎉 Aku sangat bahagia! Terima kasih telah menjadi alasan senyumku. ❤️';
  } else {
    responseText.textContent = '😢 Tidak apa-apa, aku tetap akan menghargai kamu. 🌷';
  }

  document.getElementById('question').classList.add('hidden');
  
  setTimeout(() => {
    responseContainer.classList.remove('hidden');
  }, 1000); // Tampilkan setelah 1 detik
}

function reset() {
  // Reset semua elemen ke awal
  document.querySelector('#response-container').classList.add('hidden');
  document.querySelector('#question').classList.add('hidden');
  document.querySelector('.start-btn').classList.remove('hidden');
  document.querySelector('#gombalan').classList.add('hidden');

  // Reset musik
  const music = document.getElementById('background-music');
  music.pause();
  music.currentTime = 0;
}

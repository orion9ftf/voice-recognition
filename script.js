const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const texto = document.getElementById('texto');

//reconocimiento de voz según idioma:
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false //espacios en blanco

btnStartRecord.addEventListener('click', () => {
  recognition.start();
})

btnStopRecord.addEventListener('click', () => {
  recognition.abort();
})


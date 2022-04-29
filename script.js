const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const btnPlayText = document.getElementById('btnPlayText');
const texto = document.getElementById('texto');

//reconocimiento de voz según idioma:
const recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false //espacios en blanco

recognition.onresult = (event) => {
  const results = event.results;
  const frase = results[results.length -1][0].transcript;
  texto.value += frase; //en el textarea le pasamos la frase que estamos recuperando
}

//este evento se genera cuando hemos dejado de hablar | grabar
recognition.onend = (event) => {
  console.log('ya no está grabando');
}

//errores:
recognition.onerror = (event) => {
  console.log(event.error);
}


btnStartRecord.addEventListener('click', () => {
  recognition.start();
})


btnStopRecord.addEventListener('click', () => {
  recognition.abort();
})


btnPlayText.addEventListener('click', () => {
  leerTexto(texto.value);
})


//el navegador me repite lo que tengo en el textarea:
function leerTexto(texto) {
  //creamos el objeto:
  const speech = new SpeechSynthesisUtterance();

  //modificar las propiedades
  speech.text = texto;
  speech.volume = 1; //nivel de volume
  speech.rate = 1; //velocidad de reproducción
  speech.pitch = 1; //tono

  window.speechSynthesis.speak(speech);
}

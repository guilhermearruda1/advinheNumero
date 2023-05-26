let elementoChute = document.getElementById('chute');
let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    let chute = e.results[0][0].transcript;
    exibeChuteTela(chute);
    verificaChuteValorValido(chute);
}

function exibeChuteTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
            <span class="box">${chute}</span>
        
    `
}

recognition.addEventListener('end', () => recognition.start())

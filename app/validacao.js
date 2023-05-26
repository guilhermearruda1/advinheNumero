function verificaChuteValorValido(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor Inválido </div>'
        return
    }

    if(numeroMaiorMenorPermitido(numero)){
        elementoChute.innerHTML += `<div> Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O Número Secreto era ${numeroSecreto}</h3>
        <button id="jogarNovamente" class="btn-jogar"> <i class="fas fa-gamepad"></i> Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto ) {
        elementoChute.innerHTML += `
        <div>O Número Secreto é Menor <i class="fas fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O Número Secreto é Maior <i class="fas fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido (numero) {
   return Number.isNaN(numero);
}

function numeroMaiorMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente') {
        window.location.reload();
    }
})
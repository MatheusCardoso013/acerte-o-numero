let vidasFull = document.querySelector("h4")
let vidas = vidasFull.textContent
let vidasNumero = parseInt(vidas)


function verificaChuteValido(chute) {
    const numero = +chute

    if (numeroValido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido!</div>'
        return
    }

    if (maiorOuMenorLimite(numero)) {
        elementoChute.innerHTML += `<div>Chute inválido: Deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}!</h3>

            <button id="jogarNovamente" class="btn">Jogar Novamente</button>
        `
        return

    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>'
        vidasNumero -= 1;
        vidasFull.innerHTML = vidasNumero

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>'
        vidasNumero -= 1;
        vidasFull.innerHTML = vidasNumero

    }
    
    if (vidasNumero === 0) {
        document.body.innerHTML = `
            <h2>Você perdeu!</h2>
            <h3>O número secreto era ${numeroSecreto}!</h3>

            <button id="jogarNovamente" class="btn">Jogar Novamente</button>
        `
    }

}

function numeroValido(numero) {
    return Number.isNaN(numero)
}

function maiorOuMenorLimite(numero) {
    return numero > maiorValor || numero < menorValor
}

function perdeu(numero) {
    return numero = 0
}

document.body.addEventListener('click', e => {
    if(e.target.id = 'jogarNovamente') {
        window.location.reload();
    }
})

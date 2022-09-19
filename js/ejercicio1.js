let botonComenzar = document.getElementById('botonComenzar')
botonComenzar.addEventListener('click', () => {
    let numAleatorio = Math.round(Math.random() * (100 - 1) + 1)
    const divCase1_1 = document.createElement('DIV')
    const enunciado1_1 = `<p class="text-center text-white mt-3 enunciado">Se ha creado un numero aleatorio entre 1-100, intenta adivinar cual es</p>
    <div class='text-center mb-3'>
        <input type="number" id="input1" value="">
    </div>
    <div class='text-center'>
        <button type="button" id='botonComprobar' class="btn btn-light">Comprobar</button>
    </div>`
    divCase1_1.innerHTML = enunciado1_1
    document.querySelector('.container-fluid').appendChild(divCase1_1)
    botonComenzar.setAttribute('disabled', '')
    let botonComprobar = document.getElementById('botonComprobar')
    botonComprobar.addEventListener('click', () => {
        if (input1.value < 1 || input1.value > 100) {
            alert('🙄 Ese numero no se encuentra en el rango establecido')
        } else if (input1.value < numAleatorio) {
            alert('El numero magico es MAYOR al numero que acabaste de introducir')
        } else if (input1.value > numAleatorio) {
            alert('El numero magico es MENOR al numero que acabaste de introducir')
        } else {
            alert(`Felicidades, el numero magico era "${numAleatorio}" 🥳`)
            botonComprobar.setAttribute('disabled', '')
        }
    })
})
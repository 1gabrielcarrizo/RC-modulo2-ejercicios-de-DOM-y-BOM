let botonIniciar5 = document.getElementById('botonIniciar5')
let botonPausar5 = document.getElementById('botonPausar5')
let botonResetear5 = document.getElementById('botonResetear5')
let contadorSeg5 = 1
let contadorMin5 = 0
let interval5
botonIniciar5.addEventListener('click', () =>{
    botonIniciar5.setAttribute('disabled','')
    botonPausar5.removeAttribute('disabled')
    botonResetear5.removeAttribute('disabled')
    interval5 = setInterval(() =>{
        if(contadorSeg5==60){
            contadorSeg5=0
            contadorMin5++
            minuto5.innerHTML = `0${contadorMin5}`
        }
        segundo5.innerHTML = `0${contadorSeg5}`
        if(contadorSeg5>9){
            segundo5.innerHTML = contadorSeg5
        }
        contadorSeg5++
    },1000)
})
botonPausar5.addEventListener('click', () =>{
    clearInterval(interval5)
    botonIniciar5.removeAttribute('disabled')
    botonPausar5.setAttribute('disabled','')
})
botonResetear5.addEventListener('click', () =>{
    botonIniciar5.removeAttribute('disabled')
    botonPausar5.setAttribute('disabled','')
    botonResetear5.setAttribute('disabled','')
    clearInterval(interval5)
    minuto5.innerHTML=`00`
    segundo5.innerHTML=`00`
    contadorSeg5=1
    contadorMin5=0
})
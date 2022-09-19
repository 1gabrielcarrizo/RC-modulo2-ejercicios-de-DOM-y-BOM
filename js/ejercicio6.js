let botonIniciar = document.getElementById('botonIniciar')
let botonPausar = document.getElementById('botonPausar')
let botonResetear = document.getElementById('botonResetear')

let inputMinuto = document.getElementById('inputMinuto')
let inputSegundo = document.getElementById('inputSegundo')

let minutitos = parseInt(inputMinuto.value)
let segunditos = parseInt(inputSegundo.value)

let interval

botonIniciar.addEventListener('click', () =>{
  botonIniciar.setAttribute('disabled',true)
  botonPausar.removeAttribute('disabled')
  botonResetear.removeAttribute('disabled')
  
  inputMinuto.setAttribute('disabled', true)
  inputSegundo.setAttribute('disabled', true)

  segunditos = parseInt(inputSegundo.value)

  interval = setInterval(() => {
    if(inputMinuto.value>1){
      spanMinuto.innerHTML = `0${inputMinuto.value}`
    }else if(inputMinuto.value>9){
      spanMinuto.innerHTML = `${inputMinuto.value}`
    }
    if(inputSegundo.value<10){
      spanSegundo.innerHTML = `0${inputSegundo.value}`
    }else if(inputSegundo.value<=59){
      spanSegundo.innerHTML = `${inputSegundo.value}`
    }

    inputSegundo.value--
    inputMinuto.value--

    if(inputSegundo.value<0 && inputMinuto.value<0){
      clearInterval(interval)
    }
  }, 1000);
})


botonPausar.addEventListener('click', () =>{
    botonIniciar.removeAttribute('disabled')
    botonPausar.setAttribute('disabled','')
    clearInterval(interval)
})

botonResetear.addEventListener('click', () =>{
    inputMinuto.value=''
    inputSegundo.value=''
    clearInterval(interval)
    spanMinuto.innerHTML='00'
    spanSegundo.innerHTML='00'
    botonIniciar.removeAttribute('disabled')
    botonPausar.setAttribute('disabled','')
    botonResetear.setAttribute('disabled','')
})
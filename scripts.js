let opcion = parseInt(prompt('Ingrese un numero del 1-6 para visualizar/desarrollar un ejercicio'))

if(isNaN(opcion)){
    const divNoUnNumero = document.createElement('DIV')
    const noUnNumero = `<h2 class="text-center text-white">🤷‍♂️ El valor ingresado no es un numero o se ingreso un string null...</h2>`
    divNoUnNumero.innerHTML = noUnNumero
    document.querySelector('.container-fluid').appendChild(divNoUnNumero)
}else{
    switch(opcion){
        case 1:
            const divCase1 = document.createElement('DIV')
            const enunciado1 = `<p class="text-justify text-white enunciado mb-0">1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.</p>
            <p class="text-justify text-white enunciado">Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.</p>
            <button type="button" id='botonComenzar' class="btn btn-light btn-lg mr-auto ml-auto d-block">¡Comenzar!</button>`
            divCase1.innerHTML = enunciado1
            document.querySelector('.container-fluid').appendChild(divCase1)
            let boton1 = document.getElementById('botonComenzar')
            boton1.addEventListener('click', () => {
                let numAleatorio = Math.round(Math.random() * (100-1)+1)
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
                boton1.setAttribute('disabled','')
                let boton2 = document.getElementById('botonComprobar')
                boton2.addEventListener('click', () => {
                    if(input1.value<1 || input1.value>100){
                        alert('🙄 Ese numero no se encuentra en el rango establecido')
                    }else if(input1.value<numAleatorio){
                        alert('El numero magico es MAYOR al numero que acabaste de introducir')
                    }else if(input1.value>numAleatorio){
                        alert('El numero magico es MENOR al numero que acabaste de introducir')
                    }else{
                        alert(`Felicidades, el numero magico era "${numAleatorio}" 🥳`)
                        boton2.setAttribute('disabled','')
                    }
                })
            })
        break;
        case 2:
            const divCase2 = document.createElement('DIV')
            const enunciado2 = `<p class="text-justify text-white enunciado mb-0">2- Crea una clase llamada Persona que siga las siguientes condiciones:</p>
            <p class="text-justify text-white enunciado mb-0">Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.</p>
            <p class="text-justify text-white enunciado mb-0">Los métodos que se debe poder utilizar  son:</p>
            <p class="text-justify text-white enunciado mb-0">mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.</p>
            <p class="text-justify text-white enunciado mb-0">Para realizar este método tener en cuenta la siguiente tabla de generaciones:</p>
            <img src="assets/img/imagen1.png" alt="tabla" class="img-test">
            <p class="text-justify text-white enunciado mb-0">esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.</p>
            <p class="text-justify text-white enunciado mb-0">mostrarDatos: devuelve toda la información del objeto.</p>
            <p class="text-justify text-white enunciado mb-3">Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.</p>
            <div class="divFormPersona mx-auto my-3 bg-light rounded px-2 pb-2">
                <h2 class="text-center py-2">Datos Personales</h2>
                <hr>
                <form id="formPersona">
                    <div class="form-row">
                        <div class="form-group col-lg-4 col-md-4">
                          <input type="text" class="form-control" id="inputNombre2" placeholder="Nombre" value="" required>
                        </div>
                        <div class="form-group col-lg-1 col-md-2">
                            <input type="tel" class="form-control" id="inputEdad2" required placeholder="Edad" value="" min="1" maxlength="3">
                        </div>
                        <div class="form-group col-lg-2 col-md-3">
                            <input type="tel" class="form-control" id="inputDNI2" required placeholder="DNI" value="" min="1" maxlength="8">
                        </div>
                        <div class="form-group col-lg-2 col-md-3">
                            <select class="custom-select" id="selectSexo2" required>
                                <option selected disabled value="">Género</option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                              </select>
                        </div>
                        <div class="form-group col-lg-1 col-md-4">
                            <input type="tel" class="form-control" id="inputPeso2" value="" required placeholder="Peso" min="1" maxlength="3">
                        </div>
                        <div class="form-group col-lg-2 col-md-4">
                            <input type="tel" class="form-control" id="inputAltura2" value="" required placeholder="Altura" min="1" maxlength="3">
                        </div>
                        <div class="form-group col-lg-3 col-md-4">
                            <input type="tel" class="form-control" id="inputAnio2" value="" required placeholder="Fecha de nacimiento" maxlength="4">
                        </div>
                    </div>
                    <div class="form-row">
                        <button type="submit" class="btn btn-outline-primary mx-auto">Cargar datos</button>
                    </div>
                    <!-- <input type="text" class="form-control" id="inputTareas" value=""> -->
                </form>
                <ul id="formUlPersona" class="list-group mt-3"></ul>
            </div>`
            divCase2.innerHTML = enunciado2
            document.querySelector('.container-fluid').appendChild(divCase2)
            let formPersona = document.getElementById('formPersona')
            let formUlPersona = document.getElementById('formUlPersona')
            const crearPersona = (nombrePersona,edadPersona,dniPersona,sexoPersona,pesoPersona,alturaPersona,anioPersona) => {
                let cardPersona = `<li class="list-group-item d-flex justify-content-between align-items-center mt-1 formLiPersona">Nombre: ${nombrePersona}, Edad: ${edadPersona}, DNI: ${dniPersona}, Género: ${sexoPersona}, Peso: ${pesoPersona} kg, Altura: ${alturaPersona} cm, Fecha de nacimiento: ${anioPersona}<button class="btn btn-outline-info mx-1 botonGeneracion">Generación</button>
                <button class="btn btn-outline-success botonEdad">Edad</button></li>`
                formUlPersona.innerHTML += cardPersona
            }
            formPersona.addEventListener('submit', (e) => {
                e.preventDefault()
                let nombrePersona = document.getElementById('inputNombre2').value
                let edadPersona = document.getElementById('inputEdad2').value
                let dniPersona = document.getElementById('inputDNI2').value
                let sexoPersona = document.getElementById('selectSexo2').value
                let pesoPersona = document.getElementById('inputPeso2').value
                let alturaPersona = document.getElementById('inputAltura2').value
                let anioPersona = document.getElementById('inputAnio2').value
                crearPersona(nombrePersona,edadPersona,dniPersona,sexoPersona,pesoPersona,alturaPersona,anioPersona)
                formPersona.reset()
            })
            formUlPersona.addEventListener('click', (e) => {
                if(e.target.classList.contains('botonGeneracion')){
                    if(anioPersona>=1994 && anioPersona<=2010){
                        alert(`Pertenece a la generacion "Z" y su rasgo es la "Irreverencia"`)
                    }else if(anioPersona>=1981 && anioPersona<=1993){
                        alert(`Pertenece a la generacion "Y" (Millennials) y su rasgo es la "Frustacion"`)
                    }else if(anioPersona>=1969 && anioPersona<=1980){
                        alert(`Pertenece a la generacion "X" y su rasgo es la "Obsesion por el exito"`)
                    }else if(anioPersona>=1949 && anioPersona<=1998){
                        alert(`Pertenece a la generacion "Baby Boom" y su rasgo es la "Ambicion"`)
                    }else if(anioPersona>=1930 && anioPersona<=1948){
                        alert(`Pertenece a la generacion "Silent Generation" (Los niños de la posguerra) y su rasgo es la "Austeridad"`)
                    }else{
                        alert(`No pertenece a ninguna generacion ya establecida...`)
                    }
                }
            })
            formUlPersona.addEventListener('click', (e) => {
                if(e.target.classList.contains('botonEdad')){
                    (edadPersona>=18) ? alert(`Es mayor de edad`) : alert(`Es menor de edad`)
                }
            })
            
        break;
        case 3:
            const divCase3 = document.createElement('DIV')
            const enunciado3 = `<p class="text-justify text-white mb-3 enunciado">3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.</p>
            <div class="divForm mx-auto bg-light rounded px-2 pb-2">
            <h2 class="text-center py-2">📃 Lista de tareas</h2>
            <hr>
            <form id="formLista">
                <input type="text" class="form-control" id="inputTareas" value="">
            </form>
            <ul id="formUl" class="list-group mt-3"></ul>
            </div>`
            divCase3.innerHTML = enunciado3
            document.querySelector('.container-fluid').appendChild(divCase3)
            let listaTareas = document.getElementById('formLista')
            let formUl = document.getElementById('formUl')
            const crearLista = (texto) => {
                let cardTareas = `<li class="list-group-item d-flex justify-content-between align-items-center mt-1 formLi">📌 ${texto}<button class="btn btn-outline-danger botonEliminar ml-1">X</button></li>`
                formUl.innerHTML += cardTareas
            }
            listaTareas.addEventListener('submit', (e) => {
                e.preventDefault()
                const texto = document.getElementById('inputTareas').value
                if(texto.length != 0){
                    crearLista(texto)
                    listaTareas.reset()
                }else{
                    alert('Por favor, ingrese una tarea por hacer')
                }
            })
            formUl.addEventListener('click', (e) => {
                if(e.target.classList.contains('botonEliminar')){
                    e.target.parentElement.remove()
                }
            })
        break;
        case 4:
            const divCase4 = document.createElement('DIV')
            const enunciado4 = `<p class="text-justify text-white enunciado">4- Crear una web con un reloj que muestre la siguiente información:</p>
            <img src="assets/img/imagen2.png" alt="reloj" class="img-test">
            <h3 id="diaMesAnio" class='text-center text-white mt-3 border border-light p-2 mx-auto case4'></h3>
            <h2 id="tiempo4" class='text-center text-white border border-light p-2 mx-auto case4'></h2>`
            divCase4.innerHTML = enunciado4
            document.querySelector('.container-fluid').appendChild(divCase4)
            let diaMesAnio = document.getElementById('diaMesAnio')
            let tiempo4 = document.getElementById('tiempo4')
            let fecha = new Date()
            let dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sabado','Domingo']
            let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
            diaMesAnio.innerHTML= `${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`
            setInterval(() =>{
                let hora = new Date()
                tiempo4.innerHTML= hora.toLocaleTimeString()
            },1000)
        break;
        case 5:
            const divCase5 = document.createElement('DIV')
            const enunciado5 = `<p class="text-justify text-white enunciado">5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.</p>
            <h2 class="text-center text-white mb-3"><span id="minuto5">0</span>:<span id="segundo5">0</span></h2>`
            divCase5.innerHTML = enunciado5
            document.querySelector('.container-fluid').appendChild(divCase5)
            let segundo5 = document.getElementById('segundo5')
            let minuto5 = document.getElementById('minuto5')
            const divBotones5 = document.createElement('DIV')
            const botones5 = `<div id="botones5" class="text-center">
            <button type="button" id='botonIniciar5' class="btn btn-light btn-lg">Iniciar</button>
            <button type="button" id='botonPausar5' class="btn btn-light btn-lg mx-5" disabled>Pausar</button>
            <button type="button" id='botonResetear5' class="btn btn-light btn-lg" disabled>Resetear</button>
            </div>`
            divBotones5.innerHTML = botones5
            document.querySelector('.container-fluid').appendChild(divBotones5)
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
                        minuto5.innerHTML = contadorMin5
                    }
                    segundo5.innerHTML = contadorSeg5
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
                minuto5.innerHTML=0
                segundo5.innerHTML=0
                contadorSeg5=1
                contadorMin5=0
            })
        break;
        case 6:
            const divCase6 = document.createElement('DIV')
            const enunciado6 = `<p class="text-justify text-white enunciado">6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.</p>`
            divCase6.innerHTML = enunciado6
            document.querySelector('.container-fluid').appendChild(divCase6)
        break;
        default:
            const divNumInvalido = document.createElement('DIV')
            const numInvalido = `<h2 class="text-center text-white">🤷‍♂️ El numero ingresado no se encuentra en el rango establecido...</h2>`
            divNumInvalido.innerHTML = numInvalido
            document.body.appendChild(divNumInvalido)
    }
}
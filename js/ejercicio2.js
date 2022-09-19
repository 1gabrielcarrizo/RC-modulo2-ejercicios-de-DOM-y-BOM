class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,año){
        this.nombre=nombre
        this.edad=edad
        this.dni=dni
        this.sexo=sexo
        this.peso=peso
        this.altura=altura
        this.año=año
    }

    mostrarGeneracion(){
        if(this.año>=1994 && this.año<=2010){
            alert(`${this.nombre} pertenece a la generacion "Z" y su rasgo es la "Irreverencia"`)
        }else if(this.año>=1981 && this.año<=1993){
            alert(`${this.nombre} pertenece a la generacion "Y" (Millennials) y su rasgo es la "Frustacion"`)
        }else if(this.año>=1969 && this.año<=1980){
            alert(`${this.nombre} pertenece a la generacion "X" y su rasgo es la "Obsesion por el exito"`)
        }else if(this.año>=1949 && this.año<=1998){
            alert(`${this.nombre} pertenece a la generacion "Baby Boom" y su rasgo es la "Ambicion"`)
        }else if(this.año>=1930 && this.año<=1948){
            alert(`${this.nombre} pertenece a la generacion "Silent Generation" (Los niños de la posguerra) y su rasgo es la "Austeridad"`)
        }else{
            alert(`${this.nombre} no pertenece a ninguna generacion ya establecida...`)
        }
    }

    esMayorDeEdad(){
        if(this.edad>=18){
            alert(`${this.nombre} tiene ${this.edad} años, por lo tanto, es mayor de edad`)
        }else{
            alert(`${this.nombre} tiene ${this.edad} años, por lo tanto, es menor de edad`)
        }
    }

    mostrarDatos(){
        return `${this.nombre} tiene ${this.edad} años, su DNI es ${this.dni}, mide ${this.altura} metros, pesa ${this.peso} kg, su sexo es "${this.sexo}" y nacio en el año ${this.año}`
    }
}

let formPersona = document.getElementById('formPersona')
let personitas=[]

formPersona.addEventListener('submit', (e) =>{
    e.preventDefault()
    let nombrePersona = document.getElementById('inputNombre2').value
    let edadPersona = document.getElementById('inputEdad2').value
    let dniPersona = document.getElementById('inputDNI2').value
    let sexoPersona = document.getElementById('selectSexo2').value
    let pesoPersona = document.getElementById('inputPeso2').value
    let alturaPersona = document.getElementById('inputAltura2').value
    let anioPersona = document.getElementById('inputAnio2').value
    personitas.push(new Persona(nombrePersona,edadPersona,dniPersona,sexoPersona,pesoPersona,alturaPersona,anioPersona))
    formPersona.innerHTML+=`<div id="formLiPersona" class="p-2 d-flex justify-content-between align-items-center mt-1 formLiPersona">Nombre: ${nombrePersona}, Edad: ${edadPersona}, DNI: ${dniPersona}, Género: ${sexoPersona}, Peso: ${pesoPersona} kg, Altura: ${alturaPersona} cm, Fecha de nacimiento: ${anioPersona}<button type="button" id="botonGeneracion" class="btn btn-outline-info mx-1 botonGeneracion" onclick="mostrarGeneracion()">Generación</button>
    <button type="button" id="botonEdad" class="btn btn-outline-success botonEdad">Edad</button>`
})

formPersona.addEventListener('click', (e) =>{
    if(e.target.classList.contains('botonGeneracion')){
        for(let person of personitas){
            person.mostrarGeneracion()
        }
    }
})

formPersona.addEventListener('click', (e) =>{
    if(e.target.classList.contains('botonEdad')){
        for(let person of personitas){
            person.esMayorDeEdad()
        }
    }
})